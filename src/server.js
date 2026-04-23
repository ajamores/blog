import express from 'express';
import { config } from 'dotenv';
import { connectDB, disconnectDB } from '../src/config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import path from 'path'
import { fileURLToPath } from 'url'
import { requireAuth } from './middleware/requireAuth.js';
import cookieParser from 'cookie-parser';

//------------Route Endpoints--------------------\
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js'
import { loginGuard } from './middleware/loginGuard.js';



//start app/configs
const app = express();
const PORT = 8080;
config();
connectDB();

//limits every request to your server — static files, API calls, page loads, everything — to 100 requests per 15 minutes per IP
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100
})

//limit requests for logging in 
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10 // only 10 login attempts per 15 min
})


//-------------MiddleWares---------------

//Rate limiter
if (process.env.NODE_ENV === 'production') {
  app.use(limiter);
}

// protect against web vulnerabilities (XSS) by setting HTTP headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: [
              "'self'",
              "https://unpkg.com",
              "https://cdn.jsdelivr.net",
              "'sha256-QAw++TxTiQghvYBPPNzvdXLegLmMy8r1QFgK2Oi++3U='",
              "'sha256-bgvkAmgghohc16fWnVd2DG2XqQ5feAbjTkq+60BCWr8='",
              "'sha256-PgRYCkahO219wNjEeyXnqJ2S1b5rGzIfAIHW1OHhmAc='",
            ],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'", "https://cdn.jsdelivr.net", "https://unpkg.com"],
            
        }
    }
}))

//CORS
// app.use(cors({
//     origin: "*", //  //All domain for testing
//     credentials: true
// }))

//dont forget express comes with build in middle ware like json
app.use(express.json({limit: '10mb'})); // parses JSON bodies first

app.use(cookieParser());

//HTML forms submit data in a format called application/x-www-form-urlencoded which
//looks like this in the raw request: username=armand&password=1234
//express.urlencoded reads that raw string and converts it into a proper JS object: 
// app.use(express.urlencoded({ extended: true })); //No need not using params 

//middleware for server logging
app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
    });
    next();
});








app.use("/auth", authLimiter ,authRoutes); //authLimiter see above for rate limit
app.use("/blog", blogRoutes);
app.use("/category", categoryRoutes);

//ES Module does not give __dirname for free, need to create yourself 
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//`express.static` tells Express "serve everything inside this folder as if it's at the root URL." So your `public/`
// folder becomes the root for static files:
app.use(express.static(path.join(__dirname, '../public')));

//TODO: Refactor routes into routes folder 
// Page routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../views/index.html')));
app.get('/post/:id', (req, res) => res.sendFile(path.join(__dirname, '../views/post.html')));
app.get('/admin/login', loginGuard, (req, res) => res.sendFile(path.join(__dirname, '../views/admin/login.html')));

app.get('/admin/dashboard', requireAuth ,(req, res) => res.sendFile(path.join(__dirname, '../views/admin/dashboard.html')));
app.get('/admin/edit/:id', requireAuth, (req, res) => res.sendFile(path.join(__dirname, '../views/admin/edit.html')));
app.get('/admin/create', requireAuth, (req, res) => res.sendFile(path.join(__dirname, '../views/admin/create.html')));

// ↓ add these two lines at the bottom, order matters
app.use(notFound);      // catches any request that didn't match a route above
app.use(errorHandler);  // handles errors passed via next(error) from anywhere


const server = app.listen(PORT, () => {
    console.log("Server up and running at port: " + PORT);
});


//------------LISTEN FOR COMMON SPECIFIC ERROR EVENTS------------------

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown --- sigterm aka signal is stopped in production
process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
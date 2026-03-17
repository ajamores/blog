import express from 'express';
import { config } from 'dotenv';
import { connectDB, disconnectDB } from '../src/config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

//start app/configs
const app = express();
const PORT = 8080;
config();
connectDB();




//-------------MiddleWares---------------
//dont forget express comes with build in middle ware like json
app.use(express.json()); // parses JSON bodies first

//middleware for server logging
app.use((req, res, next) => {
    const start = Date.now();
    res.on("finish", () => {
        const duration = Date.now() - start;
        console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} ${res.statusCode} - ${duration}ms`);
    });
    next();
});



//------------Route Endpoints--------------------\
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);


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
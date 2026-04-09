import EditorJS from 'https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest/dist/editorjs.mjs';
import Header from 'https://cdn.jsdelivr.net/npm/@editorjs/header@latest/dist/header.mjs';
import List from 'https://cdn.jsdelivr.net/npm/@editorjs/list@latest/dist/list.mjs';
import Quote from 'https://cdn.jsdelivr.net/npm/@editorjs/quote@latest/dist/quote.mjs';
import CodeTool from 'https://cdn.jsdelivr.net/npm/@editorjs/code@latest/dist/code.mjs';
import InlineCode from 'https://cdn.jsdelivr.net/npm/@editorjs/inline-code@latest/dist/inline-code.mjs';
import Marker from 'https://cdn.jsdelivr.net/npm/@editorjs/marker@latest/dist/marker.mjs';
import Delimiter from 'https://cdn.jsdelivr.net/npm/@editorjs/delimiter@latest/dist/delimiter.mjs';
import ImageTool from 'https://cdn.jsdelivr.net/npm/@editorjs/image@latest/dist/image.mjs';
import Embed from 'https://cdn.jsdelivr.net/npm/@editorjs/embed@latest/dist/embed.mjs';
import { getBlogPost } from './api.js';

const slug = window.location.pathname.split('/')[3]

console.log("SLUG: " + slug);
const data = await getBlogPost(slug);
console.log(data);

const title = data.data.post.title;
const excerpt = data.data.post.excerpt;
const status = data.data.post.status;

const titleContent = document.getElementById('title-content').textContent = title;
const excerptContent = document.getElementById('excerpt-content').textContent = excerpt;



const blocks = data.data.post.content.blocks;

const editor = new EditorJS({
  holder: 'editorjs',
  tools: {

    header: {
      class: Header,
      inlineToolbar: true,
      config: {
        placeholder: 'Enter a header',
        levels: [2, 3, 4],
        defaultLevel: 2
      }
    },

    list: {
      class: List,
      inlineToolbar: true
    },

    image: { class: ImageTool},
    embed: { class: Embed },
    code: { class: CodeTool },
    delimiter: { class: Delimiter },
    inlineCode: { class: InlineCode },
    marker: { class: Marker },
    quote: { class: Quote }
  },

  onReady: () => {console.log('Editor.js is ready to work!')},
  data:{blocks}
});




lucide.createIcons();
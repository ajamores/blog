import EditorJS from '@editorjs/editorjs';

import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import CodeTool from '@editorjs/code';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import ImageTool from '@editorjs/image';
import SimpleImage from '@editorjs/simple-image'
import Embed from '@editorjs/embed';
import { getBlogPost } from './api.js';



const slug = window.location.pathname.split('/')[3]

console.log("SLUG: " + slug);
const data = await getBlogPost(slug);
console.log(data);

const title = data.data.post.title;
const excerpt = data.data.post.excerpt;
const status = data.data.post.status;

document.getElementById('title-content').textContent = title;
document.getElementById('excerpt-content').textContent = excerpt;




//status toggle logic 
const statusToggle = document.getElementById("statusToggle");
const statusLabel = document.getElementById("statusLabel");
if(status === "PUBLISHED"){
  statusToggle.value = "PUBLISHED"
}







const blocks = data.data.post.content.blocks;

const editor = new EditorJS({
  holder: 'editorjs',
  autofocus: true,
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

    image: {class: SimpleImage},
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
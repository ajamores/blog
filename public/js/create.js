
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import CodeTool from '@editorjs/code';
import InlineCode from '@editorjs/inline-code';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
// import ImageTool from '@editorjs/image';
import SimpleImage from '@editorjs/simple-image'
import Embed from '@editorjs/embed';
import { createBlogPost } from './api.js';




let tags= [];

const renderTag = (tag) => {
  const t  = document.createElement('div');
  t.className = 't';
  t.innerHTML = `${tag}<span class="tag-remove">×</span>`;

  //add event listener to each tag
  t.querySelector('.tag-remove').addEventListener('click', () => {
    //Create new array excluding the selected tag
    tags = tags.filter(t => t !== tag);
    console.log(tags);
    t.remove();
  });

  document.getElementById("categories").append(t);
}

//For adding tags 
const tagInput = document.getElementById('tag-input');
const tagBtn = document.getElementById('add-tag');
const tagError = document.getElementById('add-error');

tagBtn.addEventListener('click', () => {
  const input = tagInput.value.trim().toLowerCase();
  
  if(!tags.includes(input)){
    renderTag(input);
    tags.push(input)
    tagInput.value = "";
    tagError.textContent = "";
   
  }else{
    tagError.textContent = ` Error: ${input} already exists`
  }
});


//status default draft 
let status = "DRAFT";
const statusToggle = document.getElementById("statusToggle");
const statusLabel = document.getElementById("statusLabel");
statusLabel.textContent = `Status: ${status}`;
statusToggle.checked = false;

//Now we listen for any statusToggle changes and update stauts accordingly
statusToggle.addEventListener('change', () => {
  status = statusToggle.checked ? "PUBLISHED" : "DRAFT"
  statusLabel.textContent = `Status: ${status}`;
  // console.log(status);
});



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
});


const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener('click', async  () => {
  
  const content = await editor.save();

  const payload = {
    readingTime: Number(document.getElementById('ttr').value),
    title: document.getElementById('title-content').value,
    excerpt: document.getElementById('excerpt-content').value,
    categories: tags,
    status: status,
    content: content
  }

  //debug
  console.log(payload);
  for (const [key, val] of Object.entries(payload)) {
    const size = new Blob([JSON.stringify(val)]).size;
    console.log(`  ${key}: ${(size / 1024).toFixed(2)} KB`);
  }


  content.blocks.forEach((block, i) => {
    const size = new Blob([JSON.stringify(block)]).size;
    console.log(`Block ${i} [${block.type}]: ${(size / 1024).toFixed(2)} KB`);
  });

  let saveStatus = document.getElementById('save-status');
  try{
    const req = await createBlogPost(JSON.stringify(payload));
    console.log(req);
    saveStatus.textContent = req.status === "success" ? "Blog post saved successfully!" : "Error when saving post"; 

  } catch(error){
    console.log(error);
    saveStatus.textContent = 'Error when saving post'
  } 


});



lucide.createIcons();
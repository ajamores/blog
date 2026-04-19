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
import { getBlogPost, updateBlogPost, deleteBlogPost } from './api.js';


//get article slug
const slug = window.location.pathname.split('/')[3]
console.log("SLUG: " + slug);

//fetch data according to slug
const data = await getBlogPost(slug);
console.log(data);

const title = data.data.post.title;
document.getElementById('title-content').textContent = title;

const excerpt = data.data.post.excerpt;
document.getElementById('excerpt-content').textContent = excerpt;

//Grab info
let categories =  data.data.post.categories;
//create array of tags
let tags = categories.map(category => category.name);

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

//render them 
tags.forEach(tag => {
  renderTag(tag);
});

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







let status = data.data.post.status; //let to allow change not const
//status toggle logic 
const statusToggle = document.getElementById("statusToggle");
const statusLabel = document.getElementById("statusLabel");

//First determine what toggle should look like based on intial status
switch (status) {
  case "PUBLISHED":
    statusLabel.textContent = `Status: ${status}`;
    statusToggle.checked = true;
    break;
  case "DRAFT": 
    statusLabel.textContent = `Status: ${status}`;
    statusToggle.checked = false;
    break;
  default:
    console.log("Status Error")
    break;
}

//Now we listen for any statusToggle changes and update stauts accordingly
statusToggle.addEventListener('change', () => {
  status = statusToggle.checked ? "PUBLISHED" : "DRAFT"
  statusLabel.textContent = `Status: ${status}`;
  // console.log(status);
});


//Blocks is the content for post 
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



//SAVE LOGIC 
const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener('click', async  () => {
  
  const content = await editor.save();

  const payload = {
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
    const req = await updateBlogPost(slug, JSON.stringify(payload));
    console.log(req);
    saveStatus.textContent = req.status === "success" ? "Blog post saved successfully!" : "Error when saving post"; 

  } catch(error){
    console.log(error);
    saveStatus.textContent = 'Error when saving post'
  } 


});

//DELETE LOGIC
const deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener('click', async () => {
  const confirmed = confirm('Are you sure you want to delete this post? This cannot be undone.');
  if(!confirmed){
    return
  }

  try {
    const req = await deleteBlogPost(slug);
    console.log(req);
    if (req.status === "success") {
      window.location.href = "/admin/dashboard";
    }
  } catch (error) {
    console.log(error);
  }
});

lucide.createIcons();
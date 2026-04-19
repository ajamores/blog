
import { getAllPublishedBLogPosts } from './api.js'


//Fetch all published posts on start
const postData = await getAllPublishedBLogPosts();
//isolate posts 
const posts = postData.data.posts;
//set for category tags
const categories = new Set();

//loop through each post and extract unique tags 
posts.forEach(element => {
    let tag = element.categories;

    tag.forEach(t => 
        categories.add(t.name)
    );
});


//grab tags div container
const tags = document.getElementById('tags');
categories.forEach(element => {
    const tag = document.createElement("div");
    tag.className = "tag";
    tag.textContent = element;
    tags.append(tag);
});


// console.log(posts);

const postContainer = document.getElementById('posts');
posts.forEach(element => {
    //construct post and contents
    const post = document.createElement("a");
    post.href = `/post/${element.slug}`;
    let postTitle = document.createElement("h2");
    let postDate = document.createElement("span");
    let postExcerpt = document.createElement("p");
    let postCategories = document.createElement("div");
    let readMore = document.createElement('p');

    //Post class
    post.className = "post";

    postTitle.className = "postTitle";
    postCategories.className = "postCategories"
    postDate.className = "postDate";
    postExcerpt.className ="postExcerpt"

    //give elements values
    postTitle.textContent = element.title;
    const date = new Date(element.createdAt).toISOString().split('T')[0];
    postDate.textContent = date;
    postExcerpt.textContent = element.excerpt;

    element.categories.forEach( elem => {
        let tag = document.createElement("div")
        tag.className = "tag";
        // console.log(elem.name);
        tag.textContent = elem.name
        postCategories.append(tag);
    })


    readMore.innerHTML = 'Read More <i data-lucide="arrow-right"></i>';
    readMore.id = 'readbtn';
    readMore.className = 'flex items-center gap-1';

    postCategories.append(readMore);
    



    //Package it all up in post div and append to contianer
    post.append(postDate, postTitle, postExcerpt, postCategories);
    postContainer.append(post);


});

//get last tag 
const lastTag = tags.lastElementChild;
lastTag.setAttribute('draggable', true);
lastTag.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'secret');
});

const sunMoon = document.getElementById("sunMoon");
sunMoon.addEventListener('dragover', (e) => e.preventDefault());
sunMoon.addEventListener('drop', (e) => {
  e.preventDefault();
  if (e.dataTransfer.getData('text/plain') === 'secret') {
    window.location.href = '/admin/login';
  }
});


document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--spotlight-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--spotlight-y', `${e.clientY}px`);
});

lucide.createIcons();










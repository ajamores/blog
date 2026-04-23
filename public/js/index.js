
import { getAllPublishedBLogPosts } from './api.js'
import { initThemeToggle } from './theme.js'

//toggle between light and dark mode
initThemeToggle();


//Fetch all published posts on start
const postData = await getAllPublishedBLogPosts();
//isolate posts 
const posts = postData.data.posts;
//set for category tags
const categories = new Set();

//send this tag first
categories.add('all posts'); 
//loop through each post and extract unique tags 
posts.forEach(element => {
    let tag = element.categories;

    //for each category in a post 
    tag.forEach(t => 
        categories.add(t.name)
    );
});


//grab tags div container
const tags = document.getElementById('tags');



//Then make tag for all the categories
categories.forEach(element => {

    const tag = document.createElement("div");
    tag.className = "tag";
    tag.textContent = element;
    tags.append(tag);

    if(element === 'all posts'){
      tag.classList.add('active');
    }

    tag.addEventListener('click', () => {

      //loop though each tag and turn off the active toggle
      document.querySelectorAll('.tag').forEach(t => t.classList.remove('active'));

      //set the one you pressed to active
      tag.classList.add('active');

      //set new slected tag
      selectedTag = tag.textContent;

      const filteredPosts = filterPosts(selectedTag);

      renderPosts(filteredPosts);
    });
});


//Container to store rendered posts 
const postContainer = document.getElementById('posts');

/**
 * 
 * Filter posts based on selected or 
 * 'active' tag
 * @param {*} selectedTag 
 * @returns array of filtered posts 
 */
const filterPosts = (selectedTag) => {

  if(selectedTag === 'all posts'){
    return posts
  } 

  const filteredPosts = posts.filter(post => 
    post.categories.some(category => category.name === selectedTag)
  )

  return filteredPosts;
}




/**
 * fill post container with filtered posts 
 * @param {*} filteredPosts 
 */
const renderPosts = (filteredPosts) => {

  //Clear container first 
  postContainer.innerHTML = '';

  filteredPosts.forEach(element => {
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

  lucide.createIcons();
}

//default
let selectedTag = 'all posts';

renderPosts(filterPosts(selectedTag));





//get last tag for login logic
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

//Mouse glow logic
document.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty('--spotlight-x', `${e.clientX}px`);
  document.documentElement.style.setProperty('--spotlight-y', `${e.clientY}px`);
});


//hambuger menu logic
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');

  menuBtn.innerHTML = isOpen
  ? '<i data-lucide="menu"></i>'
  : '<i data-lucide="x"></i>';

  lucide.createIcons();
});



lucide.createIcons();










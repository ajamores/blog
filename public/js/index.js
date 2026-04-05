
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


    readMore.textContent = 'Read More ->';
    readMore.className = 'readbtn';
    postCategories.append(readMore);
    



    //Package it all up in post div and append to contianer
    post.append(postDate, postTitle, postExcerpt, postCategories);
    postContainer.append(post);


});


lucide.createIcons();










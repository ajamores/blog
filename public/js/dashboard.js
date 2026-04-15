
import { getAllBlogPosts } from '/js/api.js'

const postData = await getAllBlogPosts();
console.log(postData);
const posts = postData.data.posts;

const container = document.getElementById("posts");

posts.forEach(elem => {

    let post = document.createElement("article");
    post.className = "post"

    let postTitle = document.createElement("h2");
    postTitle.className = "postTitle";
    postTitle.textContent = elem.title;

    let postDate = document.createElement("span");
    postDate.className = "postDate";
    const date = new Date(elem.createdAt).toISOString().split('T')[0];
    postDate.textContent = date;

    let postExcerpt = document.createElement("p");
    postExcerpt.className ="postExcerpt"
    postExcerpt.textContent = elem.excerpt;

    let postCategories = document.createElement("div");
    postCategories.className = "postCategories"
    elem.categories.forEach( tag => {
        let t = document.createElement("div")
        t.className = "tag";
        t.textContent = tag.name
        postCategories.append(t)
    })


    const edit = document.createElement('a');
    edit.className = 'middle'
    edit.textContent = 'Edit'
    edit.href = `/admin/edit/${elem.slug}`
   



    post.append(postDate, postTitle, postExcerpt, postCategories, edit);
    container.append(post);


    //logout listener
    

    
});


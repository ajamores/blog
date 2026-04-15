import { getPublishedBlogPost } from '../js/api.js'

const slug = window.location.pathname.split('/')[2]


const blogPost = await getPublishedBlogPost(slug);
const post = blogPost.data.post;
console.log(post);



//Set up date info
const date = new Date(post.createdAt);

// For datetime attribute (machine-readable)
const dateISO = date.toISOString().split('T')[0];

// For user-friendly display
const dateReadable = date.toLocaleDateString("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const dateElement = document.createElement("time");
dateElement.dateTime = dateISO;
dateElement.textContent = dateReadable;

document.getElementById("date").append(dateElement);

// Render post title
const title = document.createElement('h1');
title.textContent = post.title;
title.className = 'post-title';
document.getElementById("title").append(title);

//render Excerpt
const excerpt = document.createElement('h2');
excerpt.textContent = post.excerpt;
document.getElementById("excerpt").appendChild(excerpt);


const tags = post.categories
tags.forEach(elem => {
    let tag = document.createElement("div");
    tag.textContent = elem.name;
    tag.className = "tag";
    document.getElementById("categories").appendChild(tag);
});



const container = document.querySelector('#content');

// Render blocks
post.content.blocks.forEach(block => {
  let element;


  switch (block.type) {
    case 'header':
        element = document.createElement(`h${block.data.level}`);
        element.innerHTML = block.data.text;
        element.className = `post-heading post-heading--${block.data.level}`;

      break;

    case 'paragraph':
      element = document.createElement('p');
      element.innerHTML = block.data.text;
      element.className = 'post-paragraph';
      break;

    case 'list':
        element = document.createElement(block.data.style === 'ordered' ? 'ol' : 'ul');
        element.className = `post-list post-list--${block.data.style}`;
        block.data.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = item;
            li.className = 'post-list__item';
            element.appendChild(li);
        });
        break;

    case 'image':
        const figure = document.createElement('figure');
        figure.className = 'post-image';

        console.log(block.data)

        element = document.createElement('img');
        element.loading = 'lazy';
        element.src = block.data.url + '?w=800&q=75&auto=format';
        element.alt = block.data.caption || '';

        figure.appendChild(element);

        if (block.data.caption) {
            let caption = document.createElement('figcaption');
            caption.innerHTML = block.data.caption;
            figure.appendChild(caption);
        }

        element = figure;
        console.log(element);

        break;

    case 'quote':
        element = document.createElement('blockquote');
        element.innerHTML = block.data.text;
        element.className = 'post-quote';
        break;

    case 'code':
        const pre = document.createElement('pre');
        pre.className = 'post-code';
        element = document.createElement('code');
        element.textContent = block.data.code;
        element.className = 'post-code__block';
        pre.appendChild(element);
        element = pre;
        break;

    default:
        console.warn(`Unhandled block type: ${block.type}`);
        return;
  }

  container.appendChild(element);

});

lucide.createIcons();
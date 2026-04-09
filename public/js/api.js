

const BASE_URL = `http://localhost:8080`;

const getAllPublishedBLogPosts = async () => {

    const res = await fetch(`${BASE_URL}/blog`);
    if(!res.ok){
        throw new Error("Error fetching published blog posts");
    }
    const data = await res.json();

    return data;


}

const getPublishedBlogPost = async (slug) => {
    
   
    const res = await fetch(`${BASE_URL}/blog/${slug}`);

    if(!res.ok){
        throw new Error("Error fetching published blog post");
    }
    const data = await res.json();
    return data
    
}

const getAllBlogPosts = async () => {
    const res = await fetch(`${BASE_URL}/blog/admin/all`, {
        method: 'GET',
        credentials: 'include'
    });

    if(!res.ok){
        throw new Error('Error fetching all blog posts')
    }

    const data = await res.json()

    return data;
}

const getBlogPost = async (slug) => {
    const res = await fetch(`${BASE_URL}/blog/admin/${slug}`, {
        method: 'GET',
        credentials: 'include'
    })
    if(!res.ok){
         throw new Error('Error fetching blog: ' + slug)
    }

    const data = await res.json();

    return data;
}

const login = async (username, password) => {

    const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({username, password})
    })

    if(!res.ok){
        const data = await res.json();
        throw new Error(data.error || 'Login failed');
    }

    return res.json();
}



export {getAllPublishedBLogPosts, getPublishedBlogPost, getAllBlogPosts, getBlogPost, login};

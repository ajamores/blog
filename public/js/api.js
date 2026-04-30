

const BASE_URL = `http://localhost:8080`;

const getAllPublishedBLogPosts = async () => {

    const res = await fetch(`${BASE_URL}/api/blog`);
    if(!res.ok){
        throw new Error("Error fetching published blog posts");
    }
    const data = await res.json();

    return data;


}

const getPublishedBlogPost = async (slug) => {
    
   
    const res = await fetch(`${BASE_URL}/api/blog/${slug}`);

    if(!res.ok){
        throw new Error("Error fetching published blog post");
    }
    const data = await res.json();
    return data
    
}

const getAllBlogPosts = async () => {
    const res = await fetch(`${BASE_URL}/api/blog/admin/all`, {
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
    const res = await fetch(`${BASE_URL}/api/blog/admin/${slug}`, {
        method: 'GET',
        credentials: 'include'
    })
    if(!res.ok){
         throw new Error('Error fetching blog: ' + slug)
    }

    const data = await res.json();

    return data;
}

const createBlogPost = async (body) => {

    
    const res = await fetch(`${BASE_URL}/api/blog/admin/create`, {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-type': 'application/json'},
        body: body
        });

    if(!res.ok){
        throw new Error('Error creating new blog post')
    }

    const data = await res.json();

    return data;

}

const updateBlogPost = async (slug, payload) => {

    const res = await fetch(`${BASE_URL}/api/blog/admin/${slug}`, {
                method: 'PATCH',
                headers: {'Content-type': 'application/json'},
                credentials: 'include',
                body: payload
                })

    if(!res.ok){
        const data = await res.json();
        throw new Error(data.error || "failed to update post")
    }

    return res.json();


}

const deleteBlogPost = async (slug) => {
    const res = await fetch(`${BASE_URL}/api/blog/admin/delete/${slug}`, {
        method: 'DELETE',
        credentials: 'include',
    })
    if(!res.ok){
        const data = await res.json();
        throw new Error(data.error || "failed to delete post")
    }
    return res.json();
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

const logout = async () => {
    try {

        const res = await fetch(`${BASE_URL}/auth/logout`, {
            method: 'POST',
            credentials: 'include'
        });

        if(!res.ok){
            throw new Error('Error when logging out');
        }

        window.location.href = '/blog';
;
    } catch (error) {
        console.log(error);
    }
}



export {getAllPublishedBLogPosts, getPublishedBlogPost, getAllBlogPosts, getBlogPost, updateBlogPost, createBlogPost, deleteBlogPost, login, logout};

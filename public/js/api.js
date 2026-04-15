

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

const createBlogPost = async (body) => {

    try {
        const res = await fetch(`${BASE_URL}/blog/admin/create`, {
        method: 'POST',
        credentials: 'include',
        headers: {'Content-type': 'application/json'},
        body: body
        })

        if(!res.ok){
            throw new Error('Error creating new blog post')
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

const updateBlogPost = async (slug, payload) => {

    try {
        const res = await fetch(`${BASE_URL}/blog/admin/${slug}`, {
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
    } catch (error) {
        console.log(error)
    }

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
        const res = fetch(`${BASE_URL}/auth/logout`);

        if(!res.ok){
            throw new Error('Error when logging out');
        }

        return await res.json();

    } catch (error) {
        console.log(error);
    }
}



export {getAllPublishedBLogPosts, getPublishedBlogPost, getAllBlogPosts, getBlogPost, updateBlogPost, createBlogPost, login};

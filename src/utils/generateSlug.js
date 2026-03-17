

export const generateSlug = (title) => {

    return title
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // Remove all non-alphanumeric chars except spaces and dashes
        .trim() // Trim leading/trailing spaces
        .replace(/\s+/g, '-') // Replace spaces with a single dash
        .replace(/-+/g, '-'); // Replace multiple dashes with a single dash
}



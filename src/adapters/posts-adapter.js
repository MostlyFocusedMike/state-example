const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async () => {
        const posts = await fetch(postsUrl).then(r => r.json()).catch(console.log)
        return posts;
};

export {
    getPosts,
}
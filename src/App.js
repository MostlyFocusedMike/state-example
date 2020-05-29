import React from 'react';
import './App.css';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

const postAdapter = {
    getPosts: async () => {
        const posts = await fetch(postsUrl).then(r => r.json()).catch(console.log)
        console.log('posts: ', posts);
        return posts;
    }
}

class App extends React.Component {
    state = {
        posts: []
    }

    componentDidMount() {
        console.log('hello', this.state.posts)
        postAdapter.getPosts()
    }

    render() {
        return (
            <div className="App">
                Hello there
            </div>
        )
    }

}

export default App;

import React from 'react';
import Posts from './components/Posts';
import Buttons from './components/Buttons';

import './App.css';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts'

const postAdapter = {
    getPosts: async () => {
        const posts = await fetch(postsUrl).then(r => r.json()).catch(console.log)
        return posts;
    }
}

class App extends React.Component {
    state = {
        posts: null,
    }

    componentDidMount() {
        console.log('hello', this.state.posts)
        postAdapter.getPosts()
            .then(posts => {
                this.setState({ posts });
            })
    }

    render() {
        const { posts, indexes } = this.state;
        console.log('posts: ', posts);
        return (
            <div className="App">
                Hello there
                <div id="posts">
                    { posts &&
                        <>
                            <Buttons total={posts.length} />
                            <Posts posts={posts} />
                        </>
                    }
                </div>
            </div>
        )
    }

}

export default App;

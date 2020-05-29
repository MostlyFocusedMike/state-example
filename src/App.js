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
        indexes: [0,1,2,3,4,5,6,7,9] // use PageLimit
    }

    componentDidMount() {
        console.log('hello', this.state.posts)
        postAdapter.getPosts()
            .then(posts => {
                this.setState({ posts });
            })
    }

    setIndexes = (indexes) => {
        this.setState({ indexes })
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
                            <Buttons total={ posts.length } setIndexes={ this.setIndexes } />
                            <Posts posts={ posts } indexes={ indexes }/>
                        </>
                    }
                </div>
            </div>
        )
    }

}

export default App;

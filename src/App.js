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
    pageLimit = 7;
    state = {
        posts: null,
        indexes: [...Array(this.pageLimit).keys()],
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
        return (
            <div className="App">
                Hello there
                <div id="posts">
                    { posts &&
                        <>
                            <Buttons
                                total={ posts.length }
                                setIndexes={ this.setIndexes }
                                pageLimit={ this.pageLimit }
                            />
                            <Posts posts={ posts } indexes={ indexes }/>
                        </>
                    }
                </div>
            </div>
        )
    }

}

export default App;

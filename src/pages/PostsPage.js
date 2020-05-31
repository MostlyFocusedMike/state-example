import React from 'react';
import Posts from '../components/Posts';
import Buttons from '../components/Buttons';
import { getPosts } from '../adapters/posts-adapter';

class PostsPage extends React.Component {
    pageLimit = 7;
    state = {
        posts: null,
        indexes: [...Array(this.pageLimit).keys()],
    }

    componentDidMount() {
        document.title = 'Posts'
        getPosts()
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
            <div className="posts-page">
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

export default PostsPage;
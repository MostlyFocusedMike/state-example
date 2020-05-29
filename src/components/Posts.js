import React from 'react';
import Post from './Post'

class Posts extends React.Component {
    render() {
        const { posts } = this.props
        return (
            <div id="posts">
                {
                    posts.map((post) => (
                        <Post post={post} key={post.id} />
                    ))
                }
            </div>
        )
    }
}

export default Posts;
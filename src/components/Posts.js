import React from 'react';
import Post from './Post'

class Posts extends React.Component {
    render() {
        const { posts, indexes } = this.props
        return (
            <div id="posts">
                {
                    indexes.map((showIndex) => {
                        const post = posts[showIndex]
                        return <Post post={post} key={post.id} />
                    })
                }
            </div>
        )
    }
}

export default Posts;
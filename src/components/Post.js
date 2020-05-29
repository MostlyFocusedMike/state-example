import React from 'react';

class Post extends React.Component {
    render() {
        const { post } = this.props;
        return (
            <div className="post">
                {post.title}
                <br />
                {post.userId}
            </div>
        )
    }
}

export default Post;
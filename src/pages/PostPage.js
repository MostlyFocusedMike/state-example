import React from 'react';

class PostPage extends React.Component {
    componentDidMount() {
        document.title = 'Post Page'
    }

    render() {
        console.log('props.match: ', this.props.match);
        return <h1>Post Page</h1>
    }
}

export default PostPage;

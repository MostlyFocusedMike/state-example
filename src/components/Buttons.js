import React from 'react';

const pageLimit = 9

class Buttons extends React.Component {
    state = { // replace this with upper state
        indexes: []
    }

    handleClick = (e) => {
        e.preventDefault();
        const pageNum = e.target.value;
        this.getIndexes(pageNum);
    }

    generateButtons = () => {
        const {total} = this.props
        console.log('total: ', total);
        const num = Math.ceil(total / pageLimit);
        const arr = Array(num).fill('');
        console.log(arr.length);
        return arr.map((_,idx) => <button
            onClick={this.handleClick}
            value={idx + 1}
        >
            {idx + 1 }
        </button>)
    }

    getIndexes = (pageNum) => {
        const {total} = this.props;
        console.log('pageNum: ', pageNum);
        const upper = pageLimit * pageNum;
        let indexes = [...Array(upper).keys()];
        // TODO: fix upper limit issue
        if (indexes.length > total) {
            console.log('index here: ', );
            indexes = indexes.slice(0, total)
        }
        console.log('indexes: ', indexes.slice(-9));
        console.log('this.props: ', this.props);
        this.props.setIndexes(indexes.slice(-9))
    }


    render() {
        return (
            <div id="buttons">
                {this.generateButtons()}
            </div>
        )
    }
}

export default Buttons
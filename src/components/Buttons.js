import React from 'react';

class Buttons extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        const pageNum = e.target.value;
        this.getIndexes(pageNum);
    }

    generateButtons = () => {
        const {total, pageLimit} = this.props
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
        const {total, pageLimit} = this.props;
        console.log('pageNum: ', pageNum);
        const upper = pageLimit * pageNum;
        let indexes = [...Array(upper).keys()];
        console.log('indexes: ', indexes);
        if (indexes.length > total) {
            const overflow = -1 * (total - (indexes.length - pageLimit));
            console.log('overflow: ', overflow);
            indexes = indexes.slice(0,total).slice(overflow)
        }
        console.log('indexes: ', indexes.slice(-9));
        console.log('this.props: ', this.props);
        this.props.setIndexes(indexes.slice(-1 * pageLimit))
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
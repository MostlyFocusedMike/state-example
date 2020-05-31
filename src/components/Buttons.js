import React from 'react';
import uuid from 'uuid';

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
        return arr.map((_,idx) => <button
            onClick={this.handleClick}
            value={ idx + 1 }
            key={ uuid.v4() }
        >
            {idx + 1 }
        </button>)
    }

    getIndexes = (pageNum) => {
        const {total, pageLimit} = this.props;
        const upper = pageLimit * pageNum;
        let indexes = [...Array(upper).keys()];
        if (indexes.length > total) {
            const overflow = -1 * (total - (indexes.length - pageLimit));
            indexes = indexes.slice(0,total).slice(overflow)
        }
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
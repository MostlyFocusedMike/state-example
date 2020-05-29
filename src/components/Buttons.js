import React from 'react';


class Buttons extends React.Component {
    generateButtons = () => {
        const {total} = this.props
        console.log('total: ', total);
        const num = Math.ceil(total / 9);
        const arr = Array(num).fill('');
        console.log(arr.length);
        return arr.map((_,idx) => <button>{idx + 1 }</button>)
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
import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class Businesslist extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    }
}

export default Businesslist;
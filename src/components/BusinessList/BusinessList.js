import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class Businesslist extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => <Business key={business.id} business={business}/>)
                }
            </div>
        )
    }
}

export default Businesslist;
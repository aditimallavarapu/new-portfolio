import React from 'react';
import {Link} from 'react-router-dom'

class SeeMore extends React.Component {
    render(){
        return <Link to="/"><i className="fa fa-chevron-left"> Home</i></Link>;
        }
}

export default SeeMore;



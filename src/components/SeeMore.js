import React from 'react';
import {Link} from 'react-router-dom'

class SeeMore extends React.Component {
    render(){
        return <Link to="/projects"><i className="fa fa-chevron-down"> Check out other Projects</i></Link>;
        }
}

export default SeeMore;



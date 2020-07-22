import React from 'react';
import {Link} from 'react-router-dom'
class LoadMore extends React.Component {
    render(){
        return <Link to="/aditi-portfolio/projects"  className="load-more"><i className="fa fa-chevron-down"> Load More Projects</i></Link>;
        }
}

export default LoadMore;



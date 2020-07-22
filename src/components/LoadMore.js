import React from 'react';

class LoadMore extends React.Component {
    render(){
        console.log(window.location.pathname);
        return <a href="/aditi-portfolio/all-projects" className="load-more"><i className="fa fa-chevron-down"> Load More Projects</i></a>;
        }
}

export default LoadMore;



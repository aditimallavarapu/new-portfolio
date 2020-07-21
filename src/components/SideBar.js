import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import CustomRoute from './CustomRoute';
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx'

class SideBar extends Component {
    render() {
      return (
<div className="demo-big-content">
    <Layout >
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"></Link>} scroll>
            <Navbar />
           {/*} <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
      </Navigation>*/}
      </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Aditi's Website</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
            Where
        </Drawer>
        <Content>
            <div className="page-content" />
            <CustomRoute/>
        </Content>
    </Layout>
</div>
);
}
}

export default SideBar;
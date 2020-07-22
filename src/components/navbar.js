import React from "react";
import $ from "jquery";

import logo1 from "../img/cut-girl.png";
import logo2 from "../img/bw-girl.png";
import Footer from './Footer'
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        document
          .querySelector(".banner")
          .classList.add("black");
        document
          .querySelector(".subtitle")
          .classList.add("black");
          document
          .querySelectorAll(".MuiBottomNavigationAction-root *:not(g)").forEach(el => el
          .classList.add("icon-black")) ; 
        this.setState({ logo: logo2 });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        document
          .querySelector(".banner")
          .classList.remove("black");
        document
          .querySelector(".subtitle")
          .classList.remove("black");  
        document
          .querySelectorAll(".MuiBottomNavigationAction-root *:not(g)").forEach(el => el
          .classList.remove("icon-black")) ;  
        this.setState({ logo: logo1 });
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (

        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname /*&&
        this.pathname.replace(/^\//, "") === ""*/
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
     /*else if(

        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname &&
        this.pathname.replace(/^\//, "") !== ""
      ) {
        console.log(this.pathname);
        console.log(this.hash);
        console.log(window.location);
        window.location.pathname="";
        
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
      }
      }*/
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    return (
      <div>
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">
          
            <img
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: "70px" }}
            />
           
          </a>
          
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div>
          <h4 className="banner no-margin">Aditi Mallavarapu </h4>
          <h6 className="subtitle no-margin">Researcher | Instructor | Developer</h6>
          </div>
          <div className="align-footer">
            <Footer />
          </div>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#publications">
                  Publications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;

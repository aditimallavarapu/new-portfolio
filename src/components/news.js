import React from "react";
import openpose from "../img/openpose.png";
import sna from '../img/sna.png'
import causal from "../img/causal.png"
import {Link} from 'react-router-dom';
import "./stars.scss";
import LoadMore from './LoadMore'

class News extends React.Component {
  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route background">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div>
                <div id="about" className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="title-box-2">
                        <h5 className="title-left">In Recent News</h5>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li><b>November 2020</b>  Selected for CRA-WP career mentoring workshop</li>
                    <li><b>October 2020</b>  Our paper on Collective Problem Solving regulation got accepted for AERA 2021</li>
                    <li><b>October 2020</b>  Accepted to compete for funding through Schimdt Futures tools competition to develop a teacher facing dashboard.</li>
                    <li><b>October 2020</b>  Virtually organized the MobileCHI2020 with University of Oldenberg, Germany</li>
                    <li><b>September 2020</b>  Attended the Tapia Conference 2020</li>
                    <li><b>July 2020</b>  My work got accepted for Doctoral Consortium in EDM2020</li>
                  </ul>
                </div>
              </div>
             </div>
            </div>
          </div>
      </section>
    );
  }
}

export default News;

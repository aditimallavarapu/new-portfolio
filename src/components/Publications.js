import React from "react";
/*import myImage from "../img/myImage.png";*/
import journal1 from '../img/journal1.pdf'
import conference1 from '../img/conference1.pdf'
import "./stars.scss";

class Publications extends React.Component {
  constructor() {
    super();
    this.state = {
      conferences: [
        {
          id: "conference1",
          author:
            "Mallavarapu, A.",
          otherAuthor:", Lyons, L., Uzzo, S., Thompson, W., Levy-Cohen, R., & Slattery, B. (2019, April).",
          title:"Connect-to-Connected Worlds: Piloting a Mobile, Data-Driven Reflection Tool for an Open-Ended Simulation at a Museum. ",
          venue: "In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems",
          dets: "(p. 7). ACM",
          link: conference1 
        },
      ],
      journals:[
        {
          id: "journal1",
          author:
            "Mallavarapu, A.",
          otherAuthor: ",Lyons, L., Slattery, B., Shelley, T., Minor, E., & Zellner, M. (2015).",
          title:"Developing Computational Methods to Measure and Track Learners’ Spatial Reasoning in an Open-Ended Simulation. ",
          venue: "Journal of Educational Data Mining ",
          dets: "7(2), 49-82",
          link: journal1, 
        },
      ],
      posters:[
        {
          id: "posters1",
          author:
            "Mallavarapu, A.,",
          otherAuthor:"Beheshti, E., Lyons, L., Thompson, W., ",
          moreAuthor:"& Uzzo, S. M. (2020, Apr 17 - 21) ",
          title:"Human-in-the-Loop: Supporting Facilitators' Scaffolding of Visitor Engagement and Learning in Science Museums. ",
          venue: "[Roundtable Session]. AERA Annual Meeting San Francisco, CA (Conference Canceled)",
        },
        {
          id: "posters2",
          author:
            "Mallavarapu, A.,",
          otherAuthor:"Beheshti, E., Lyons, L.,  ",
          moreAuthor:"Wallingford, B., & Uzzo, S. (2020, April).  ",
          title:"Design Considerations for Data-Driven Dashboards: Supporting Facilitation Tasks for Open-Ended Learning. ",
          venue: "In Extended Abstracts of the 2020 CHI Conference on Human Factors in Computing Systems (pp. 1-9)",
        },
      ],
    };
  }

  render() {
    return (
      <section id="publications" className="sect-pt4 route subskill background" 
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-12">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h3 className="title-left">Publications</h3>
                      </div>
                      <h3 className="lead"> <b>Conferences</b> </h3>
                      
                      {this.state.conferences.map(content => {
                        return (
                          <div className="lead" key={content.id}>
                            <b>{content.author}</b>{content.otherAuthor} {content.title} <i>{content.venue}</i> {content.dets}
                            <div style={{textAlign: "right", marginRight:"10px"}}> <a style={{color:"black"}} href={content.link} target="_blank" rel="noopener noreferrer"> Download</a></div>
                          </div>
                        );
                      })}
                      <h3 className="lead"> <b>Journals</b> </h3>
                      
                      {this.state.journals.map(content => {
                        return (
                          <div className="lead" key={content.id}>
                            <b>{content.author}</b>{content.otherAuthor}{content.title} <i>{content.venue}</i> {content.dets}
                            <div style={{textAlign: "right", marginRight:"10px"}}> <a style={{color:"black"}} href={content.link} target="_blank" rel="noopener noreferrer"> Download</a></div>
                          </div>
                        );
                      })}
                      <h3 className="lead"> <b>Posters</b> </h3>
                      
                      {this.state.posters.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.otherAuthor}<b>{content.author}</b>{content.moreAuthor}{content.title} <i>{content.venue}</i> {content.dets}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Publications;

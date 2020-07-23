import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../img/profile-pic.jpg'
import '../components/stars.scss'
import GoHome from './GoHome'


class About extends Component {
  render() {
    return(
        <>
        <section id="myself" className="sect-pt4 route subskill background" >
          <div className="container">
            <div className="row move-little">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      
                        <div className="title-box-2">
                          <h3 className="title-left">Hello! I'm Aditi Mallavarapu.</h3>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={profile} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <p>
                             I am a Computer Science reserach student, a teacher and a developer 
                             (a blessing of taking multiple roles being affliated to Computer Science has given me).
                             I call Chennai (India), and Chicago (USA) 'home'. I am a plant enthusiast and a creative 'DIY' person . 
                             I have had the opportunity to travel and see new places and countries.

                             </p>
                             <p>
                               My research focuses on creating learning opportunities for new learners and understanding learning as a process.
                               Currently I am working as a Research Assistant at the New York Hall of Science 
                               (mueseums hold the treasure of knowledge and the perfect living lab to understand learning) and 
                               as a Teaching Assistant at the University of Illinois at Chicago (I have has the previledge 
                               to lead classes to pique interest in Computer Science for incoming freshman students). 
                               </p>
                               <p>
                                Throughout the years , I have developed tools and methodologies to understand and support learning in 
                                Open-Ended Learning Environments, which allow learners to learn via exploration (Eg. Museums). 
                                Check out my projects and publications.
                               </p>

                            </Cell>

                        </Grid>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row load-more">
          <div className="col-12">
            <GoHome /> 
          </div>
        </div>
        </section>
        </>
    )
  }
}

export default About;
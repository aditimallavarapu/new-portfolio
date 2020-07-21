import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import openpose from '../img/openpose.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'

class openposePage extends Component {
  render() {
    return(
        <>
        <section id="openpose" className="sect-pt4 route subskill background" >
          <div className="container">
            <div className="row move-little">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-12">
                      
                        <div className="title-box-2">
                          <h3 className="title-left">OpenPose Python Library</h3>
                          <h4>OpenPose and Clustering to Extract Action Poses from Video Data </h4>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={openpose} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             Collaboration often is studied in reference to the action contributions each individual in a group provides towards the collective task. Deciphering actions from video data, in the absence of think-aloud protocols and post-interviews can be very difficult, while also alluding researchers and educators from details of the contribution. We used OpenPose algorithm to detect skeletal postures of co-located museum visitors collaborating on a problem solving task, to assign action labels to understand contribution in the group task and also division of labor within the group.
                             </h6>
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
              <SeeMore/>
            </div>
          </div>
        </section>
        </>
    )
  }
}

export default openposePage;
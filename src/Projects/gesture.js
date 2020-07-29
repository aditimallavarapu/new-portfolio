import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import gesture from '../img/gesture.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'


class gesturePage extends Component {
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
                          <h3 className="title-left">Gesture Segmentation</h3>
                         </div> 
                         <div>
                        <h4>Gesture Segmentation data using Skeleton Tracking and Machine Learning</h4>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={gesture} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             Large and high-resolution display environments, such as tiled display walls or large-scale immersive environments, present a variety of benefits in visual data analysis. Recent touchless sensors and image processing tools have enabled tracking human movements unobtrusively designing collaborative interaction modalities for large display environments remains a significant challenge and important research area.   We created a machine learning based algorithm to interpret data from these sensors and segmenting the stream of movements into discrete input gestures. This allows for one to seamlessly collaborate on large screen displays with mid-air gestures.
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

export default gesturePage;

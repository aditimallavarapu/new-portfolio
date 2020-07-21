import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import mining from '../img/mining.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'

class miningPage
 extends Component {
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
                          <h3 className="title-left">Data Mining</h3>
                          <h4>Mining Connected Worlds </h4>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={mining} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             Developed methods to analyze visitors’ collective learning trajectories in Connected Worlds, an open-ended, collaborative ecosystem simulation exhibit. This was accomplished via data mining and developing custom visualizations. Results will be used to tune the simulation settings used to run the exhibit, to improve visitors’ educational experience.
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

export default miningPage;

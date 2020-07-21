import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import netlogo from '../img/netlogo.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'

class netlogoPage extends Component {
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
                          <h3 className="title-left">Netlogo Based Simulation Modelling</h3>
                          <h4>Using Simulation modelling as a tool for Collection design </h4>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={netlogo} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             Created a data-driven model of how museum visitors moved around within and made use of a pilot version of the Connected Worlds exhibit.  Used a complex system simulation tool (NetLogo) to model the layout and movement of visitors and the space, as informed by real-world measurements of visitor movements and engagement. Ran dozens of different permutations to understand which changes to the exhibit design could improve the collective usability of Connected Worlds.                             </h6>
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

export default netlogoPage;
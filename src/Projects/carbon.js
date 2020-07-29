import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import carbon from '../img/carbon.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'


class carbonPage extends Component {
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
                          <h3 className="title-left">Visual Analytics</h3>
                         </div> 
                        
                        <div>
                        <h4>World Climate Change Dashboard</h4>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={carbon} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             In this modern age, along with the advances like industrialization and technological revolution the world also is being affected adversely by the side effects of these developments. Global warming being one of the side effects every living being on the earth. The past few decades have seen adverse climate changes and the situation is only to get worse with the amount of damage we are doing on earth. Global warming is being studied by many climate researchers and scientists and by environment enthusiast. We have created a dashboard that allows juxtaposing, comparing and understanding the progression of climate change due to carbon footprints around the world.
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

export default carbonPage;

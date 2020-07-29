import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import tool from '../img/tool.png'
import '../components/stars.scss'
import SeeMore from '../components/SeeMore'


class toolPage extends Component {
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
                          <h3 className="title-left">Text Annotation Visualizer</h3>
                         </div> 
                        
                        <div>
                        <h4>A tool to annotate text for NLP</h4>
                        </div>
                        <Grid>
                            <Cell col={6}>
                            <img src={tool} alt="" className="img-fluid" />
                            </Cell>
                            <Cell col={1}>
                            </Cell>
                            <Cell col={5}>
                             
                             <h6>
                             Language hides some inherent relations among its constituents. Illustrating their relations to understand the relations though may seem trivial but has been considered to be very challenging. With the increasing amount of data being collected rapidly, NLP software are expected to be robust and comprehensive. Aiding the analysts with proper tools to visualize and to analyze these complex relations is necessary. Having a good analysis tool would also help NLP expand to other technical domains such as biology, chemistry and many others. The tool that we have developed helps in analyzing the relationship among words and among words with other components of a sentence like phrases, or sentences etc. in the text by annotating the relations between these components.
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

export default toolPage;

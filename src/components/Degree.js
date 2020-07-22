import React, { Component } from 'react';



function RenderTitle(props){
    if(props.title !== ''){
       return  <p className="lead" style={{marginTop:'0px' , marginBottom:"0px"}}><b>Thesis Title:</b>{props.title}</p>
    }
    else{
        return ""
    }
  }  

  function RenderAdvisor(props){
    if(props.Advisor !== ''){
       return  <p className="lead" style={{marginTop:'0px' }}> <b>Advisor:</b> {props.Advisor}</p>
    }
    else{
        return ""
    }
  }  


class Degree extends Component {

 
  render() {
      
    return(
      <>
        <div className="row">
          <div className="col-md-4">
            <p className="lead" style={{marginTop:'5px',marginBottom:'0px', }}>{this.props.startYear} - {this.props.endYear}</p>
          </div>
          <div className="col-md-8">
            <p className="lead" style={{marginTop:'0px',marginBottom:'0px', }}><b>{this.props.schoolName}</b></p>
            <p className="lead" style={{marginTop:'0px',marginBottom:'0px', }}>{this.props.schoolSubtitle}</p>
            <RenderTitle title={this.props.title}/>
            <RenderAdvisor Advisor={this.props.Advisor}/>
          </div>
        </div>
      </>
    )
  }
}

export default Degree;
import React, { Component } from 'react';

class Work extends Component {
  render() {
    return(
      <>
      <div className="row">
          <div className="col-md-4">
            <p className="lead" style={{marginTop:'5px',marginBottom:'0px', }}>{this.props.startYear} - {this.props.endYear}</p>
          </div>
          <div className="col-md-8">
            <p className="lead" style={{marginTop:'0px',marginBottom:'0px', }}><b>{this.props.jobName}</b></p>
          <p className="lead" style={{marginTop:'0px',marginBottom:'0px', }}>{this.props.companyName}</p>
          <p className="lead" style={{marginTop:'0px',marginBottom:'0px', }}>{this.props.jobDescription}</p>
          </div>
        </div>
      </>
    )
  }
}

export default Work;
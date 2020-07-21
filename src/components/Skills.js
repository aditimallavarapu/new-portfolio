import React, { Component } from 'react';
import { ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <>
      <div className="row">
          <div className="col-md-4">
            <p className="lead">
            {this.props.skill} </p>
            </div>
            <div className="col-md-8">
                <ProgressBar style={{margin: 'auto', width: '90%'}} progress={this.props.progress} /> 
            </div>
  </div>
       </>
      
    )
  }
}

export default Skills;
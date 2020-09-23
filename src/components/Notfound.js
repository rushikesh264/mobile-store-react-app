import React, { Component } from 'react';

export default class Notfound extends Component {
  
  render() {
    console.log("Not found:",this.props);
    return (
      <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center pt-5 bold" >
              <h1 className="display-3" style={{color:"red",fontweight:"bolder"}}>404</h1>
              <h1>Error</h1>
              <h2>Page Not Found</h2>
              <h3>The Requested url
                <span className="text-danger">
                {this.props.location.pathname} </span> 
                was not found!!!</h3>
            </div>
          </div>
        
      </div>
    );
  }
}

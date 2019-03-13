import React, { Component } from 'react';

export default class HeaderPost extends Component {
  render() {
    return (
      <div className="headerPost">
        <img src={this.props.img} />
        <div className="text">
          <h1>{this.props.name}</h1>
          <p>{this.props.time}</p>
        </div>
      </div>
    );
  }
}

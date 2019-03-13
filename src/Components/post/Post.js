import React, { Component } from 'react';

import HeaderPost from './HeaderPost';

export default class Post extends Component {
  render() {
    return (
      <div className="container">
        <HeaderPost img={this.props.img} name={this.props.name} time={this.props.time} />
        <div className="postContainer">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

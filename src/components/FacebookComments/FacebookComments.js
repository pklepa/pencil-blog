import React, { Component } from "react";
import { FacebookProvider, Comments } from "react-facebook";

export default class FacebookComments extends Component {
  constructor(props) {
    super();

    this.state = {
      url: props.url,
      width: props.width,
    };
  }

  render() {
    return (
      <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
        <Comments
          href={this.state.url}
          width={Math.min(this.state.width - 20, 700)}
        />
      </FacebookProvider>
    );
  }
}

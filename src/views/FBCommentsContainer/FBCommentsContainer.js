import React, { Component } from "react";
import { FacebookProvider, Comments } from "react-facebook";

export default class FBCommentsContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      url: props.url,
    };
  }

  render() {
    return (
      <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
        <Comments href={this.state.url} width="700" />
      </FacebookProvider>
    );
  }
}

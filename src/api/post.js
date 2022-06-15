import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=6XSP4NDBIQGSVUDHGB&redirect_uri=http://localhost:3000/"
      )
      .then((response) => {
        this.setState({
          posts: response.data,
        });
        console.log("response.data", response.data);
      });
  }
  render() {
    return (
      <div>
        <h1>Finally Hello World</h1>
      </div>
    );
  }
}

export default Post;

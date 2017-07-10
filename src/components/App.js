import React, { Component } from "react";

import PostList from "./PostList";
import SelectedPostList from "./SelectedPostList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>Selected Posts</h4>
        <SelectedPostList />
        <hr />
        <h4>All Posts</h4>
        <PostList />
      </div>
    );
  }
}

export default App;

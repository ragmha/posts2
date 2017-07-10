import React from "react";
import { connect } from "react-redux";
import SelectedPostsSelector from "../selectors/selectedPosts";

const SelectedPostsList = props =>
  <ul className="list-group">
    {props.posts.map(post =>
      <li className="list-group-item" key={post.id}>
        {post.title}
      </li>
    )}
  </ul>;

function mapStateToProps(state) {
  return {
    posts: SelectedPostsSelector(state)
  };
}

export default connect(mapStateToProps)(SelectedPostsList);

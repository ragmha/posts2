/**
 * Reselect selector
 * Takes a list of posts and ids and picks out
 * The selected Posts
 */

import { createSelector } from "reselect";
import _ from "lodash";

/**
 * Creates a select functions to pick off the pieces of state we care about
 * for Calculation
 */
const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.selectedPostIds;

const getPosts = (posts, selectedPostIds) => {
  const selectedPosts = _.filter(posts, post =>
    _.includes(selectedPostIds, post.id)
  );
  return selectedPosts;
};

export default createSelector(
  postsSelector, // pick off a piece of state
  selectedPostsSelector, // pick off a piece of state
  getPosts // Last argument is the fn with select Logic
);

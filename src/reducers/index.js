import { combineReducers } from "redux";

import posts from "./posts";
import selectedPostIds from "./selectedPosts";

const rootReducer = combineReducers({
  posts,
  selectedPostIds
});

export default rootReducer;

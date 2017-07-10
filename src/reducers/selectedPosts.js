import _ from "lodash";
import { SELECTED_POST, DESELCTED_POST } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case SELECTED_POST:
      return [...state, action.paylod];
    case DESELCTED_POST:
      return _.without(state, action.paylod);
  }
  return state;
}

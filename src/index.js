import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxPromise from "redux-promise";

import App from "./components/App";
import reducers from "./reducers";

const createStoreWithMiddleware = compose(
  applyMiddleware(ReduxPromise),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector(".container")
);

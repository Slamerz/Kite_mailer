import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import createRootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
        // ... other middlewares ...
      )
    )
  );
  store.subscribe(() => {
    localStorage.setItem("auth", JSON.stringify(store.getState().auth));
  });

  return store;
}

import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./components/root.js";
import { configureStore } from "./store/store";


document.addEventListener('DOMContentLoaded', () => {
  let store;
  // if the backend passes us a current user
  if (window.currentUser) {
    const preloadedState = {
      // then we set that user's id in our session slice of state
      session: { id: window.currentUser.id },
      entities: {
        // and toss the user itself in the users slice of state
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    // make sure to remove the currentUser form the window
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
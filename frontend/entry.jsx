import React from 'react';
import ReactDOM from 'react-dom';
import { confirgureStore } from "./store/store";

console.log("heyyyyy");
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
});
import React from 'react';
import Reactdom from 'react-dom';
import Note from './util/note';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;
  Reactdom.render(<Root store={store} />, document.getElementById("root"));

});

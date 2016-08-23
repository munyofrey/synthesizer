import React from 'react';
import ReactDOM from 'react-dom';
import Note from "./util/note";
import {TONES, NOTE_NAMES} from './util/tones';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';




document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={configureStore()}/>, root);
});

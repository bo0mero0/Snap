import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {

    let store = configureStore();
    const root = document.getElementById('root');
    Modal.setAppElement(document.body);
    ReactDOM.render(<Root store={store} />, root);
});

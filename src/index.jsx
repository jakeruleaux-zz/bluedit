import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';
// import reducer from './reducers/'
import { Provider } from 'react-redux';

const store = createStore(reducer);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={Store}>
      <Component/>
    </Provider>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}

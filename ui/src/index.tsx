import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './components/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import GitWatcherApp from './reducers';

let store = createStore(GitWatcherApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('example')
);
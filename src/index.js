import React from 'react';
//import {createRoot} from 'react-dom/client';
//import React-Dom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import App from './App';
import 'antd/dist/antd.css'
import {store} from './app/store';
import { Provider } from 'react-redux';


import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>);

/*ReactDOM.render(
<Router>
    <App />
</Router>,
document.getElementById('root'));
*/




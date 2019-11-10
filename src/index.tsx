import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import Login from './container/login/login'
import Register from './container/register/register'
//异步中间件
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'

import reducers from './reducer'
import './config'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    (window as any).devToolsExtension?(window as any).devToolsExtension():(f:any)=>f
))

ReactDOM.render((<Provider store={store}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </Switch>
        </div>
    </BrowserRouter>
</Provider>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

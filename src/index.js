import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import PostIndex from './components/PostIndex';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={Screen2} />
          <Route path="/posts/:id" component={Screen1} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

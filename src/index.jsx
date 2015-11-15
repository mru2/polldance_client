import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import API from './api';
import SSE from './sse';
import reducer from './reducer';
import {setNearbyPlaylists, setCurrentPlaylist} from './action_creators';
import apiMiddleware from './api_middleware';
import App from './components/App';
import {HomeRouteContainer} from './components/HomeRoute';
import {PlaylistRouteContainer} from './components/PlaylistRoute';

// API client
const api = new API('http://localhost:3000');

// Redux Store
const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware(api)
)(createStore);
const store = createStoreWithMiddleware(reducer);

// SSE
const sse = new SSE( payload => store.dispatch(setCurrentPlaylist(payload)) );
sse.listenTo('http://localhost:3000/stream/test');

// Routing
const routes = <Route component={App}>
  <Route path="/playlist/:playlistId" component={PlaylistRouteContainer} />
  <Route path="/" component={HomeRouteContainer} />
</Route>;

// First render
ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);

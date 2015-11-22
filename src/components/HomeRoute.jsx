import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import HomeScreen from './HomeScreen';

export const HomeRoute = React.createClass({
  mixins: [PureRenderMixin],

  componentWillMount: function() {
    this.props.fetchNearbyPlaylists();
  },

  render: function() {
    return <HomeScreen {...this.props}></HomeScreen>
  }
});

function mapStateToProps(state) {
  return {
    loaded: state.getIn(['playlists', 'loaded']),
    playlists: state.getIn(['playlists', 'nearest'])
  };
}

export const HomeRouteContainer = connect(mapStateToProps, actionCreators)(HomeRoute);

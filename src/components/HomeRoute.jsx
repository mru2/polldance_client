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
    playlists: state.get('playlists'),
    loaded: state.get('playlistsLoaded')
  };
}

export const HomeRouteContainer = connect(mapStateToProps, actionCreators)(HomeRoute);

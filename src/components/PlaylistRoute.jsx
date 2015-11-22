import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import PlaylistScreen from './PlaylistScreen';

export const PlaylistRoute = React.createClass({
  mixins: [PureRenderMixin],

  componentWillMount: function() {
    console.log('playlist will mount', this.props.params.playlistId);
    this.props.joinPlaylist(this.props.params.playlistId);
  },

  render: function() {
    return <PlaylistScreen {...this.props}></PlaylistScreen>
  }
});

function mapStateToProps(state) {
  return {
    playlist: state.get('playlist'),
    filteredTracks: state.get('filteredTracks'),
    search: state.get('search')
  };
}

export const PlaylistRouteContainer = connect(mapStateToProps, actionCreators)(PlaylistRoute);

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Loader from './Loader';
import Playlist from './Playlist';

export const PlaylistRoute = React.createClass({
  mixins: [PureRenderMixin],

  componentWillMount: function() {
    console.log('playlist will mount', this.props.params.playlistId);
    this.props.joinPlaylist(this.props.params.playlistId);
  },

  render: function() {
    return this.props.playlist.get('loaded') ? <Playlist {...this.props} /> : <Loader message="Loading tracks" />;
  }
});

function mapStateToProps(state) {
  return {
    playlist: state.get('playlist')
  };
}

export const PlaylistRouteContainer = connect(mapStateToProps, actionCreators)(PlaylistRoute);

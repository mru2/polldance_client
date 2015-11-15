import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import Loader from './Loader';
import PlaylistItem from './PlaylistItem';

export const HomeRoute = React.createClass({
  mixins: [PureRenderMixin],

  componentWillMount: function() {
    console.log('home will mount');
    this.props.fetchNearbyPlaylists();
  },

  render: function() {
    return <div>
      {
        this.props.loaded ? this.props.playlists.map( playlist => <PlaylistItem key={playlist.get('id')} playlist={playlist} joinPlaylist={this.props.joinPlaylist} /> ) : <Loader message="Searching for playlists..."/>
      }
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    playlists: state.get('playlists'),
    loaded: state.get('playlistsLoaded')
  };
}

export const HomeRouteContainer = connect(mapStateToProps, actionCreators)(HomeRoute);

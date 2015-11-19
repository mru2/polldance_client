import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Loader from './Loader';
import Header from './Header';
import PlaylistItem from './PlaylistItem';

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    if ( !this.props.loaded ) {
      return <Loader message="Loading playlists" />
    }
    else {
      return (
        <div>
          <Header title='poll.dance'
                  icon='refresh'></Header>
          { this.props.playlists.map( (playlist, index) => <PlaylistItem key={playlist.get('id')} playlist={playlist} index={index + 1} /> ) }
        </div>
      )
    }
  }
});

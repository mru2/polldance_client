import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Loader from './Loader';
import PlaylistHeaderSearch from './PlaylistHeaderSearch';
import Track from './Track';

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    if ( !this.props.playlist.get('loaded') ) {
      return <Loader message="Loading tracks" />
    }
    else {
      return (
        <div>
          <PlaylistHeaderSearch
            title={this.props.playlist.get('name')}
            search={this.props.search}
            openSearch={this.props.openSearch}
            closeSearch={this.props.closeSearch}
            setFilter={this.props.setFilter}
            setSearching={this.props.setSearching}
            ></PlaylistHeaderSearch>
          { this.props.filteredTracks.map( (track, index) => <Track key={track.get('id')} track={track} index={index + 1} /> ) }
        </div>
      )
    }
  }
});

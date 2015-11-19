import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Loader from './Loader';
import Header from './Header';
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
          <Header title={this.props.playlist.get('name')}
                  icon='refresh'></Header>
                { this.props.playlist.get('tracks').map( (track, index) => <Track key={track.get('id')} track={track} index={index + 1} /> ) }
        </div>
      )
    }
  }
});

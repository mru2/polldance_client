import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Track from './Track';

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <div>
        <h1>{this.props.playlist.get('name')}</h1>
        <h2>Search</h2>
        <div>{ this.props.playlist.get('tracks').map( track => <Track key={track.get('id')} track={track} /> ) }</div>
      </div>
    );
  }
});

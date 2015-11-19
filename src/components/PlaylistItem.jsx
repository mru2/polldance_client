import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LineItem from './LineItem';

export default React.createClass({
  mixins: [PureRenderMixin],

  _handleJoin: function() {
    window.location = "#/playlist/" + this.props.playlist.get('id');
  },

  render: function() {
    return <LineItem firstLine={this.props.playlist.get('name')}
                     secondLine={this.props.playlist.get('dist') + " meters away"}
                     icon={"angle-right"}
                     onAction={this._handleJoin}
                     index={this.props.index}></LineItem>
  }
});

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <Link to={'/playlist/' + this.props.playlist.get('id')}>
        <h1>{this.props.playlist.get('name')}</h1>
        <span>{this.props.playlist.get('dist') + " meters away"}</span>
      </Link>
    )
  }
});

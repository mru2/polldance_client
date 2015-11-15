import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <div>
        <strong>{this.props.track.get('title')}</strong>
        <em>{this.props.track.get('artist')}</em>
      </div>
    )
  }
});

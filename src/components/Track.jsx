import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import LineItem from './LineItem';

export default React.createClass({
  mixins: [PureRenderMixin],

  _handleVote: function() {
    console.log('Voting for', this.props.track.get('id'));
  },

  render: function() {
    return <LineItem firstLine={this.props.track.get('title')}
                     secondLine={this.props.track.get('artist')}
                     icon={ (this.props.track.get('from') == 'playlist') ? 'heart' : 'plus' }
                     onAction={this._handleVote}
                     index={this.props.index}></LineItem>
  }
});

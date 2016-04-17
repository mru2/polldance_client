import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const MAPPING = {
  next: 'ion-ios-arrow-right',
  like: 'ion-heart',
  add: 'ion-ios-plus-empty',
  refresh: 'ion-ios-refresh-empty',
  search: 'ion-ios-search-strong',
  spinner: 'ion-load-c',
  close: 'ion-ios-close-empty',
}

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <i className={MAPPING[this.props.name]} {...this.props}></i>
    )
  }
});

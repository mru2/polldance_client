import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = {
  container: {
    display: 'block',
    height: 72,
    lineHeight: '48px',
    fontSize: 26,
    fontWeight: 700,
    fontFamily: 'Montserrat',
    width: '100%',
    boxSizing: 'border-box',
    padding: 12,
    position: 'relative',
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    position: 'fixed',
    top: 0
  }
}

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <div style={styles.container}>{this.props.title}</div>
    )
  }
});

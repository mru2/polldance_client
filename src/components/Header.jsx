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
    position: 'relative',
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    position: 'fixed',
    top: 0
  },
  containerLeft: {
    marginRight: 72,
    height: 72,
    boxSizing: 'border-box',
    padding: 12
  },
  containerRight: {
    width: 72,
    height: 72,
    lineHeight: '42px',
    top: 0,
    right: 0,
    position: 'absolute',
    textAlign: 'center',
    boxSizing: 'border-box',
    padding: 15
  },
}

export default React.createClass({
  mixins: [PureRenderMixin],

  _handleReload: function() {
    console.log('reloading');
  },

  render: function() {
    return (
      <div style={styles.container}>
        <div style={styles.containerLeft}>
          {this.props.title}
        </div>
        <div style={styles.containerRight} onClick={this.props.onAction}>
          <i className="fa fa-refresh" onClick={this._handleReload}></i>
        </div>
      </div>
    )
  }
});

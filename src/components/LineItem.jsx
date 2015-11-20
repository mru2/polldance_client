import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = {
  container: {
    display: 'block',
    height: 72,
    width: '100%',
    boxSizing: 'border-box',
    position: 'absolute',
    borderBottom: '1px solid #f4f4f4',
    backgroundColor: '#ffffff'
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
  firstLine: {
    fontWeight: 500,
    fontFamily: 'Roboto',
    fontSize: 15,
    height: 24,
    lineHeight: '24px'
  },
  secondLine: {
    fontWeight: 300,
    fontStyle: 'italic',
    fontFamily: 'Roboto',
    color: '#999',
    fontSize: 12,
    height: 24,
    lineHeight: '24px'
  },
  icon: {
    fontSize: 24,
    lineHeight: '42px',
    color: '#E74C3C'
  }
};

export default React.createClass({
  mixins: [PureRenderMixin],

  transform: function() {
    return {
      zIndex: 1000 - this.props.index,
      transition: 'transform linear 300ms',
      transform: 'translateY(' + 72 * this.props.index + 'px)'
    }
  },

  render: function() {
    return (
      <div style={Object.assign(styles.container, this.transform())}>
        <div style={styles.containerLeft}>
          <div style={styles.firstLine}>{this.props.firstLine}</div>
          <div style={styles.secondLine}>{this.props.secondLine}</div>
        </div>
        <div style={styles.containerRight} onClick={this.props.onAction}>
          <i className={"fa fa-" + this.props.icon} style={styles.icon}></i>
        </div>
      </div>
    )
  }
});

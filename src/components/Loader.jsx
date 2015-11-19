import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = {
  container: {
    height: 72,
    lineHeight: '72px',
    color: '#999',
    fontFamily: 'Roboto',
    fontWeight: 300,
    fontStyle: 'italic',
    width: '100%',
    top: '50%',
    position: 'absolute',
    marginTop: -36,
    textAlign: 'center'
  }
}

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <div style={styles.container}>
        {this.props.message}
      </div>
    )
  }
});

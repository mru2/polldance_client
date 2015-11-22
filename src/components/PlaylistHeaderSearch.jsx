import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from './Header';

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
  input: {
    border: 'none',
    backgroundColor: 'transparent',
    color: 'white',
    marginRight: 72,
    fontSize: 22,
    width: '100%',
    outline: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, .4)'
  }
}

export default React.createClass({
  mixins: [PureRenderMixin],

  getInitialState: function() {
    return {
      timer: null
    };
  },

  _handleStartSearch: function() {
    console.log('Starting search');
    this.props.openSearch();
  },

  _handleStopSearch: function() {
    console.log('Stopping search');
    clearTimeout(this.state.timer);
    this.props.closeSearch();
  },

  _handleQueryChange: function(e) {
    console.log('Query change', e.target.value);
    clearTimeout(this.state.timer);
    this.props.setFilter(e.target.value);
    this.setState({timer: setTimeout(this._handleQueryOver, 1500)});
  },

  _handleQueryOver: function() {
    console.log('Query over');
    clearTimeout(this.state.timer);
    this.props.setSearching(this.props.search.get('query'));
  },

  renderWithSearch: function() {
    return (
      <div style={styles.container}>
        <div style={styles.containerLeft}>
          <input autoFocus
                 type="text"
                 placeholder="Search ..."
                 value={this.props.search.get('query')}
                 onChange={this._handleQueryChange}
                 onBlur={this._handleQueryOver}
                 style={styles.input}></input>
        </div>
        <div style={styles.containerRight} onClick={this.props.onAction}>
          <i className={"fa " + ( this.props.search.get('searching') ? "fa-circle-o-notch" : "fa-close" )} onClick={this._handleStopSearch}></i>
        </div>
      </div>
    );
  },

  renderWithoutSearch: function() {
    return (
      <div style={styles.container}>
        <div style={styles.containerLeft}>
          {this.props.title}
        </div>
        <div style={styles.containerRight} onClick={this.props.onAction}>
          <i className="fa fa-search" onClick={this._handleStartSearch} onChange={this._handleQueryChange} onBlur={this._handleQueryOver}></i>
        </div>
      </div>
    );
  },

  render: function() {
    if (this.props.search.get('toggled')) {
      return this.renderWithSearch();
    }
    else {
      return this.renderWithoutSearch();
    }
  }
});

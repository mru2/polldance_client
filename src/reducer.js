import {Map, List, Set, fromJS} from 'immutable';

const default_state = Map({
  playlists: Map({
    loaded: false,
    nearest: List()
  }),
  playlist: Map({
    id: null,
    name: null,
    loaded: false
  }),
  search: Map({
    toggled: false,
    query: "",
    searching: false,
    results: List()
  })
})

function computeFilteredTracks(state) {
  var tracks = state.
    getIn(['playlist', 'tracks']).
    map(track => { return track.set('from', 'playlist'); });

  var query = state.getIn(['search', 'query']);

  if ( state.getIn(['search', 'toggled']) && query !== '' ) {
    var playlistTrackIds = Set(tracks.map(track => track.get('id')));
    console.log('playlist track ids', playlistTrackIds.toJS());
    tracks = tracks.concat(
      state.
        getIn(['search', 'results']).
        filterNot(track => { return playlistTrackIds.includes(track.get('id')) }).
        map(track => { return track.set('from', 'search'); })
    );

    var queryFragments = query.
      split(' ').
      filter(f => { return f.length > 0 }).
      map(fragment => new RegExp(fragment, 'i'));

    tracks = tracks.filter( track => {
      return queryFragments.every( fragment => {
        return ( fragment.test(track.get('artist')) || fragment.test(track.get('title')) );
      });
    });
  }

  return state.set('filteredTracks', tracks);
}

function setNearbyPlaylists(state, playlists) {
  return state.mergeIn(['playlists'], {nearest: fromJS(playlists), loaded: true});
}

function joinPlaylist(state, payload) {
  return state.setIn(['playlist'], Map({id: payload.id, name: payload.name, loaded: false}));
}

function setCurrentPlaylist(state, playlist) {
  // Ignore if this is for another playlist (for quick navigation)
  if (state.getIn(['playlist', 'id']) != playlist.id) { return state; }

  return computeFilteredTracks( state.setIn(['playlist'], Map({
    id: playlist.id,
    name: playlist.name,
    loaded: true,
    tracks: fromJS(playlist.tracks)
  })) );
}

function openSearch(state) {
  return state.mergeIn(['search'], {toggled: true, query: "", searching: false});
}

function closeSearch(state) {
  return computeFilteredTracks( state.mergeIn(['search'], {toggled: false, searching: false, results: List()}) );
}

function setFilter(state, query) {
  return computeFilteredTracks( state.mergeIn(['search'], {searching: false, query: query}) );
}

function setSearching(state, query) {
  return computeFilteredTracks( state.mergeIn(['search'], {searching: true, query: query}) );
}

function setSearchResults(state, results) {
  if (!state.getIn(['search', 'toggled'])) { return state; }
  return computeFilteredTracks( state.mergeIn(['search'], {searching: false, results: fromJS(results)}) );
}

export default function(state = default_state, action) {
  console.log('[REDUX]', action);
  switch (action.type) {
  case 'SET_NEARBY_PLAYLISTS':
    return setNearbyPlaylists(state, action.payload);
  case 'JOIN_PLAYLIST':
    return joinPlaylist(state, action.payload);
  case 'SET_CURRENT_PLAYLIST':
    return setCurrentPlaylist(state, action.payload);
  case 'OPEN_SEARCH':
    return openSearch(state);
  case 'CLOSE_SEARCH':
    return closeSearch(state);
  case 'SET_FILTER':
    return setFilter(state, action.payload);
  case 'SET_SEARCHING':
    return setSearching(state, action.payload);
  case 'SET_SEARCH_RESULTS':
    return setSearchResults(state, action.payload);
  }
  return state;
}

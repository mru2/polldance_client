import {Map, List, fromJS} from 'immutable';

const default_state = Map({
  playlists: List(),
  playlist: Map({
    id: null,
    name: null,
    loaded: false
  }),
  playlistsLoaded: false
})

function setNearbyPlaylists(state, playlists) {
  return state.merge({playlists: fromJS(playlists), playlistsLoaded: true});
}

function joinPlaylist(state, payload) {
  return state.set('playlist', Map({id: payload.id, name: payload.name, loaded: false}));
}

function setCurrentPlaylist(state, playlist) {
  // Ignore if this is for another playlist (for quick navigation)
  if (state.getIn(['playlist', 'id']) != playlist.id) { return state; }

  return state.set('playlist', Map({
    id: playlist.id,
    loaded: true,
    tracks: fromJS(playlist.tracks)
  }));
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
  }
  return state;
}

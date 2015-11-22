// Location should be already fetched here
export function fetchNearbyPlaylists() {
  return {
    type: 'FETCH_NEARBY_PLAYLISTS',
    api_call: {
      verb: 'GET',
      path: '/playlists',
      callback: 'SET_NEARBY_PLAYLISTS'
    }
  }
}

export function setNearbyPlaylists(playlists) {
  return {
    type: 'SET_NEARBY_PLAYLISTS',
    payload: playlists
  };
}

export function joinPlaylist(playlist_id) {
  return {
    type: 'JOIN_PLAYLIST',
    payload: {
      id: playlist_id
    },
    api_call: {
      verb: 'GET',
      path: '/playlist/' + playlist_id,
      callback: 'SET_CURRENT_PLAYLIST'
    }
  }
}

export function setCurrentPlaylist(playlist) {
  return {
    type: 'SET_CURRENT_PLAYLIST',
    payload: playlist
  };
}

export function openSearch() {
  return {
    type: 'OPEN_SEARCH'
  }
}

export function closeSearch() {
  return {
    type: 'CLOSE_SEARCH'
  }
}

export function setFilter(query) {
  return {
    type: 'SET_FILTER',
    payload: query
  }
}

// Should be a middleware too
export function setSearching(query) {
  return {
    type: 'SET_SEARCHING',
    payload: query,
    api_call: {
      verb: 'GET',
      path: '/search?q=' + query,
      callback: 'SET_SEARCH_RESULTS'
    }
  }
}

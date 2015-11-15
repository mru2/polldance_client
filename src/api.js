const API = function(api_host) { this.api_host = api_host; }

const playlists_answer = [
  { id: 1, name: 'Foo', dist: 2.3 },
  { id: 2, name: 'Bar', dist: 8.7 },
  { id: 3, name: 'Baz', dist: 12.5 }
];

const playlist_1_answer = {
  name: 'Foo',
  id: 1,
  tracks: [
    {
      title: 'Instant Crush',
      artist: 'Daft Punk',
      id: 'dz:67238732'
    }
  ],
  playing: {

  }
}

API.prototype.doCall = function(verb, path, cb){
  var url = this.api_host + path;
  console.log('calling API on', verb, url);
  // Simulate calls for now

  if (path == '/playlists') {
    setTimeout( () => { console.log('playlists loaded'); cb(playlists_answer); }, 2000 );
  }
  else if (path == '/playlist/1') {
    setTimeout( () => { console.log('playlist 1 loaded'); cb(playlist_1_answer); }, 2000 );
  }
};

export default API;

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
};

const search_results_answer = [{id: "dz:66609426",artist: "Daft Punk",title: "Get Lucky (Radio Edit)"},{id: "dz:67238735",artist: "Daft Punk",title: "Get Lucky"},{id: "dz:67238732",artist: "Daft Punk",title: "Instant Crush"},{id: "dz:67238740",artist: "Daft Punk",title: "Contact"},{id: "dz:67238733",artist: "Daft Punk",title: "Lose Yourself to Dance"},{id: "dz:3095118",artist: "LCD Soundsystem",title: "Daft Punk Is Playing At My House"},{id: "dz:67238728",artist: "Daft Punk",title: "Give Life Back to Music"},{id: "dz:67238729",artist: "Daft Punk",title: "The Game of Love"},{id: "dz:67238739",artist: "Daft Punk",title: "Doin' it Right"},{id: "dz:3135553",artist: "Daft Punk",title: "One More Time"}];

API.prototype.doCall = function(verb, path, cb){
  var url = this.api_host + path;
  console.log('calling API on', verb, url);
  // Simulate calls for now

  console.log('[API] calling', path);

  if (path == '/playlists') {
    setTimeout( () => { console.log('playlists loaded'); cb(playlists_answer); }, 2000 );
  }
  else if (path == '/playlist/1') {
    setTimeout( () => { console.log('playlist 1 loaded'); cb(playlist_1_answer); }, 2000 );
  }
  else if (path == '/search?q=Daft Punk') {
    setTimeout( () => { console.log('search results found'); cb(search_results_answer); }, 2000 );
  }
};

export default API;

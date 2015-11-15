import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

  it('handles SET_NEARBY_PLAYLISTS with plain JS payload', () => {
    const action = {
      type: 'SET_NEARBY_PLAYLISTS',
      payload: [
        { id: 1, name: 'Foo', dist: 2.3 },
        { id: 2, name: 'Bar', dist: 8.7 },
        { id: 3, name: 'Baz', dist: 12.5 }
      ]
    };

    const nextState = reducer(undefined, action);

    const expected = {
      playlists: [
        { id: 1, name: 'Foo', dist: 2.3 },
        { id: 2, name: 'Bar', dist: 8.7 },
        { id: 3, name: 'Baz', dist: 12.5 }
      ],
      playlist: {
        id: null,
        name: null,
        loaded: false
      },
      playlistsLoaded: true
    };

    expect(nextState.toJS()).to.eql(expected);
  });

  it('handles JOIN_PLAYLIST', () => {
    const action = {
      type: 'JOIN_PLAYLIST',
      payload: {
        id: 1,
        name: 'Foo'
      }
    };

    const nextState = reducer(undefined, action);

    const expected = {
      playlists: [],
      playlist: {
        id: 1,
        name: 'Foo',
        loaded: false
      },
      playlistsLoaded: false
    };

    console.log(nextState, expected);

    expect(nextState.toJS()).to.eql(expected);
  });

});

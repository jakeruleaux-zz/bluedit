import postList from './../../src/reducers/post-list-reducer';
import c from './../../src/constants';

describe('Post list reducer', () => {
  let action;
  const postInfo = {
    author: 'Jake',
    content: 'Mad wack hella-tight stuff goin\' on on Alberta tonight.',
    timestamp: '11:45:23 AM',
    points: 0,
    id: 0,
  }

  test('should return equivalent state if no action type is recognized', () => {
    action = { type: null };
    expect(postList([], action)).toEqual([]);
  });

  test('should add post to list array', () => {
    const { author, content, timestamp, points, id } = postInfo;
    action = {
      type: c.ADD_POST,
      author: author,
      content: content,
      timestamp: timestamp,
      points: points,
      id: id
    }
    const futureState = [ postInfo ];
    expect(postList([], action)).toEqual(futureState);
  });


  test('should add points to post', () => {
    const { author, content, timestamp, points, id } = postInfo;
    action = {
      type: c.LIKE_POST,
      id: id
    }
    const stateAfter = {
      author: 'Jake',
      content: 'Mad wack hella-tight stuff goin\' on on Alberta tonight.',
      timestamp: '11:45:23 AM',
      points: 1,
      id: action.id,
    }
    expect(postList([ postInfo ], action)).toEqual([ stateAfter ]);
  });

});

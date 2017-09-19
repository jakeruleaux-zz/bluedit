export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      const { id, author, content, timestamp, points } = action;
      let newState = [
        ...state,
        {
          id: id,
          author: author,
          content: content,
          timestamp: timestamp,
          points: points,
        }
      ];
      return newState;

    case 'LIKE_POST':
      let tempState = state.slice();
      for (var i = 0; i < tempState.length; i++) {
        if (tempState[i].id === action.id) {
          tempState[i].points++;
        }
      }
      console.log(tempState);
      return tempState;
    default:
      return state;
  }
}

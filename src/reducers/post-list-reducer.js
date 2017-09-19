export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_POST':
      const { id, author, content, timestamp, points } = action;
      return [
        ...state,
        {
          id: id,
          author: author,
          content: content,
          timestamp: timestamp,
          points: points,
        }
      ]
    default:
      return state;
  }
}

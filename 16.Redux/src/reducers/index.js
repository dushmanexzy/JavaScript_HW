const comments = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_COMMENT':
      return [
        ...state,
        {
          index: action.index,
          author: action.auhtor,
          text: action.text,
          date: action.date,
          time: action.time
        }
      ]

    case 'REMOVE_COMMENT':
      return state.map(comment => {
        if (comment.index === action.index) {
          return comments.splice(index, 1);
        }
        return comment;
      })

    default:
      return state;
  }
}

export default comments;
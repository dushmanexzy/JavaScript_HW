// index????
let nextCommentIndex = 4;

export const addComment = (name) => { //name ?????
  return {
    type: 'ADD_COMMENT',
    index: nextCommentIndex++,
    name
  }
}

export const removeComment = (index) => {
  return {
    type: 'REMOVE_COMMENT',
    index
  }
}

import React from 'react';

import CommentsList from '../components/comments-list';
import InputForm from '../components/input-form';

let App = (props) => {
  return (
    <div>
      <CommentsList />
      <InputForm />
    </div>
  )
}

export default App;
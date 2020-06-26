import React from "react";
import ReactDOM from "react-dom";

class CommentWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: [
        {author: '', text: 'Вы можете оставить свой комментарий..', date: '', time: ''}
      ]
    };
  }

  render() {
    return (
      <ul>
        {
          this.state.comments.map(comment => {
            return (
              <li key={comment.date}>
                {comment.text}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

ReactDOM.render(<CommentWidget />, document.getElementById("app"));

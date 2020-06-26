import React from "react";
import ReactDOM from "react-dom";

class CommentWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      comments: [],
      commentText: ''
    };
  }

  addComment() {
    const comments = this.state.comments;
    const date = new Date();

    const newDate = [date.getDate(), date.getMonth(), date.getFullYear()].join('-');
    const newTime = [date.getHours(), date.getMinutes(), date.getSeconds()].join(':');
    comments.push({
      author: this.state.newAuthor,
      text: this.state.newCommentText,
      date: newDate,
      time: newTime
    });

    this.setState({
      comments,
      newAuthor: '',
      newCommentText: '',
      newDate: '',
      newTime: ''
    });
  }

  removeComment(key) {
    const comments = this.state.comments.filter((key, i) => { i !== key })

    this.setState({
      comments
    })
  }


  render() {
    return (
      <div>
        <ul>
          {
            this.state.comments.map((comment, i) => {
              return (
                <li key={i}>
                  <p>`{comment.author}: {comment.text} {comment.date} {comment.time}`</p>
                  <button
                    className="remove__btn"
                    type="button"
                    onClick={evt => {
                      evt.preventDefault()
                      this.removeComment();
                    }}
                  >Remove</button>
                </li>
              )
            })
          }
        </ul>

        <form>
          <label>Input name
            <input
              type="text"
              placeholder="Input your name"
              value={this.state.author}
              onCange={evt => {
                this.setState({ newAuthor: evt.target.value })
              }}
            />
          </label>

          <label>Input comment
            <input
              type="text"
              placeholder="Input new comment"
              value={this.state.text}
              onCange={evt => {
                this.setState({ newCommentText: evt.target.value })
              }}
              onKeyUp={evt => {
                if (evt.keyCode === 13) {
                  this.addComment();
                }
              }}
            />
          </label>
          <button
            className="submit__btn"
            type="submit"
            onClick={evt => {
              evt.preventDefault()
              this.addComment();
            }}
          >Add</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<CommentWidget />, document.getElementById("app"));

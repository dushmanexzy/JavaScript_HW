import React from 'react';
import ReactDom from 'react-dom';
import Comment from './Comment';
import InputForm from './Input';

import './Widget.css';

class Widget extends React.Component {
  constructor() {
    super();

    const fromStorage = JSON.parse(localStorage.getItem('comments'));

    if (fromStorage !== null) {
      this.state = {
        comments: fromStorage,
        newAuthor: '',
        newText: ''
      }
    } else {
      this.state = {
        comments: [],
        newAuthor: '',
        newText: ''
      }
    }

    const saveComments = JSON.stringify(this.state.comments);
    localStorage.setItem('comments', saveComments);
  }

  addToStorage() {
    const saveComments = JSON.stringify(this.state.comments);
    localStorage.setItem('comments', saveComments);
  }

  removeFromStorage(i) {
    const saveComments = JSON.parse(localStorage.getItem('comments'));

    saveComments.splice(i, 1);

    let comments = JSON.stringify(saveComments);

    localStorage.setItem('comments', comments);
  }

  addComment() {
    const comments = this.state.comments;

    const date = new Date();

    comments.push({
      author: this.state.newAuthor,
      text: this.state.newText,
      date: [date.getFullYear(), date.getMonth(), date.getDate()].join('-'),
      time: [date.getHours(), date.getMinutes()].join(':')
    })

    this.addToStorage();

    this.setState({
      comments,
      newAuthor: '',
      newText: ''
    })
  }

  deleteComment(i) {
    const comments = this.state.comments;

    comments.splice(i, 1);

    this.removeFromStorage(i);

    this.setState({
      comments
    })
  }

  render() {
    return (
      <>
        <h2 className="comments__title">Comments List</h2>
        
        <ul className="comments__list">
          {this.state.comments.map((comment, i) => {
            if (comment) {
              return (
                <Comment
                  key={i}
                  author={comment.author}
                  text={comment.text}
                  date={comment.date}
                  time={comment.time}
                  deleteComment={this.deleteComment.bind(this, i)}
                />
              );
            }
          })}
        </ul>

        <InputForm
          newAuthor={this.state.newAuthor}
          newText={this.state.newText}
          addComment={this.addComment.bind(this)}
          setState={this.setState.bind(this)}
        />
      </>
    )
  }
}

ReactDom.render(<Widget />, document.getElementById('app'));

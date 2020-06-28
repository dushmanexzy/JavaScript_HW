import React from 'react';
import ReactDom from 'react-dom';

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
                <li key={i} className="comments__item">
                  <div className="comment__block">
                    <p className="item__author">{comment.author}</p>
                    <p className="item__text">{comment.text}</p>
                    <p className="item__date">{comment.date}&nbsp;
                      <span className="item__date--time">{comment.time}</span>
                    </p>
                  </div>

                  <button
                    className="delComment-btn"
                    type="button"
                    onClick={
                      evt => {
                        evt.preventDefault()
                        this.deleteComment(i);
                      }
                    }>X</button>
                </li>
              )
            }
          })}
        </ul>

        <form className="comments__form">
          <div className="input__block">
            <label className="author-label" htmlFor="name">Введите ваше имя:
            <input
                id="name"
                type="text"
                placeholder="Input your name"
                value={
                  this.state.newAuthor
                }
                onChange={
                  evt => {
                    this.setState({
                      newAuthor: evt.target.value
                    })
                  }
                } />
            </label>
            <label className="text-label" htmlFor="text">Введите комментарий:
              <textarea
                id="text"
                type="text"
                placeholder="Input your comment"
                value={
                  this.state.newText
                }
                onChange={
                  evt => {
                    this.setState({
                      newText: evt.target.value
                    })
                  }
                }></textarea>

            </label>
          </div>

          <button
            className="addComment-btn"
            type="submit"
            onClick={
              evt => {
                evt.preventDefault();
                this.addComment();
              }
            }>Add Comment</button>
        </form>
      </>
    )
  }
}

ReactDom.render(<Widget />, document.getElementById('app'));

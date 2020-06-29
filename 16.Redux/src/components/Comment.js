import React from 'react';

const Comment = (props) => {
  return (
    <li className="comments__item">
      <div className="comment__block">
        <p className="item__author">{props.author}</p>
        <p className="item__text">{props.text}</p>
        <p className="item__date">{props.date}&nbsp;
          <span className="item__date--time">{props.time}</span>
        </p>
      </div>

      <button
        className="delComment-btn"
        type="button"
        onClick={
          evt => {
            evt.preventDefault()
            props.deleteComment();
          }
      }>X</button>
    </li>
  );
}

export default Comment;
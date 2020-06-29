import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h2 className="comments__title">Comments List</h2>

      <ul className="comments__list">
        {comments.map((comment, i) => {
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
    </>
  );
};

export default CommentsList;

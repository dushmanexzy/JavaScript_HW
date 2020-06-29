import React from "react";

const InputForm = (props) => {
  return (
    <form
      className="comments__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        props.addComment();
      }}
    >
      <div className="input__block">
        <label className="author-label" htmlFor="name">
          Введите ваше имя:
          <input
            id="name"
            type="text"
            placeholder="Input your name"
            value={props.newAuthor}
            onChange={(evt) => {
              props.setState({
                newAuthor: evt.target.value,
              });
            }}
            required
          />
        </label>
        <label className="text-label" htmlFor="text">
          Введите комментарий:
          <textarea
            id="text"
            type="text"
            placeholder="Input your comment"
            value={props.newText}
            onChange={(evt) => {
              props.setState({
                newText: evt.target.value,
              });
            }}
            required
          ></textarea>
        </label>
      </div>

      <button className="addComment-btn" type="submit">
        Add Comment
      </button>
    </form>
  );
};

export default InputForm;

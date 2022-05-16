import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const onCreatePost = (event) => {
    event.preventDefault();
    dispatch(addPost({ title, text }));
    setTitle("");
    setText("");
  };

  return (
    <form className="post-new" onSubmit={onCreatePost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" onClick={onCreatePost}>
        Create
      </button>
    </form>
  );
}

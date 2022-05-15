import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';

export default function CreatePost() {
  const [persone, setPersone] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const onCreatePost = (event) => {
    event.preventDefault();
    dispatch(addPost({ persone, content }));
    setPersone("");
    setContent("");
  };

  return (
    <form className="post-new" onSubmit={onCreatePost}>
      <input
        type="text"
        placeholder="Title"
        value={persone}
        onChange={(e) => setPersone(e.target.value)}
      />
      <textarea
        placeholder="Text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" onClick={onCreatePost}>
        Create
      </button>
    </form>
  );
}

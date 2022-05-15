import { useSelector } from "react-redux";
import CreatePost from "../twiterpost/CreatePost";
import PostItem from "../twiterpost/PostItem";

export function reverse(array) {
  return array.map((_, idx) => array[array.length - 1 - idx]);
}

export default function PostList() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="posts-wrapper">
      <CreatePost />
      <div className="posts-list">
        {posts.map((post) => (
          <PostItem key={post.persone} {...post} />
        ))}
      </div>
    </div>
  );
}

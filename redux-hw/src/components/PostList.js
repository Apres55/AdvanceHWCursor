import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import PostItem from "./PostItem";
import SortPosts from "./SortPosts";

export function reverse(array) {
  return array.map((_, idx) => array[array.length - 1 - idx]);
}

export default function PostList() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="posts-wrapper">
      <CreatePost />
      <SortPosts />
      <div className="posts-list">
        {posts.map((post) => (
          <PostItem key={post.userData.title} {...post} />
        ))}
      </div>
    </div>
  );
}

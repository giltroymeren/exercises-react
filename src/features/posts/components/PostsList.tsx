import * as React from "react";
import { usePosts } from "../api/getPosts";

const PostsList = () => {
  const postsQuery = usePosts();

  if (postsQuery.isLoading) {
    return <h3>Loading...</h3>;
  }

  if (!postsQuery.data) {
    return null;
  }

  return postsQuery.data.map((post) => (
    <div key={post.id}>
      <p>"{post.title}"</p>
    </div>
  ));
};

export default PostsList;

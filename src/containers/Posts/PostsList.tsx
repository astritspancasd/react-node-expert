import { Post } from "../../components/elements/Post";
import { posts } from "../../__mocks__/posts";

export const PostsList = () => {
  return (
    <>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchUsersRequest } from "../../redux/posts/postActions";

const PostSaga = () => {
  const [postId, setPostId] = useState("");
  const postData = useSelector((state) => state.post);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux-Saga middleware</h1>
      <input
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchUsersRequest(postId))}>
        get post
      </button>
      {postData.loading ? (
        <h2>Loading ...</h2>
      ) : postData.error ? (
        <h2>{postData.error}</h2>
      ) : (
        <section>
          <h2>post NO {postData.data.id}</h2>
          <h3>title : {postData.data.title}</h3>
          <div>body : {postData.data.body}</div>
        </section>
      )}
    </>
  );
};

export default PostSaga;

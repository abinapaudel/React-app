import axios from "axios";
import { useEffect } from "react";
import { setPosts } from "../../../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import PostsCard from "../../../components/card/PostsCard";

const Post = () => {
  const posts = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchPosts = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setPosts(response.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log("Posts: ", posts);
  return (
    <div
      id="courses"
      className="bg-gray-100 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-8 gap-4 md:p-5 p-5 md:px-10 sm:px-10 px-4"
    >
      {Object.keys(posts).length === 0 ? (
        <div>...Loading</div>
      ): 
      <PostsCard />

      }
    </div>
  );
};

export default Post;

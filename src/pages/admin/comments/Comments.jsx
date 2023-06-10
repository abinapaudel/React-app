import CommentsCard from "../../../components/card/CommentsCard";
import axios from "axios";
import { useEffect } from "react";
import { setComments } from "../../../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";

const Comment = () => {
  const comments = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchComments = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setComments(response.data));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  console.log("Comments: ", comments);
  return (
    <div
      id="courses"
      className="bg-gray-100 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-12 gap-4 md:p-5 p-5 md:px-10 sm:px-10 px-4"
    >
      <CommentsCard />
    </div>
  );
};

export default Comment;

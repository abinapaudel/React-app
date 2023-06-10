import { useSelector } from "react-redux";

const CommentsCard = () => {
  const comments = useSelector((state) => state.allComments.comments);
  const renderList = comments.map((comment) => {
    const { id, name, email, body } = comment;
    return (
      <div className="bg-white shadow-xl rounded-lg py-3" key={id}>
        <h1 className="text-center font-bold text-2xl text-gray-900 leading-8">
          Comments
        </h1>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {name}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>{email}</p>
          </div>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>{body}</p>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default CommentsCard;

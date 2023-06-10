import { useSelector } from "react-redux";

const PostsCard = () => {
  const posts = useSelector((state) => state.allPosts.posts);
  const renderList = posts.map((post) => {
    const { id, title, body } = post;
    return (
      <div className="bg-white shadow-xl rounded-lg py-3" key={id}>
        <h1 className="text-center font-bold text-2xl text-gray-900 leading-8">
          Posts
        </h1>
        <div className="photo-wrapper p-2">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src="./src/assets/ProfileImage.png"
            alt="User Profile"
          />
        </div>
        <div className="p-2">
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>{title}</p>
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

export default PostsCard;

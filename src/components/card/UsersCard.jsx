import { useSelector } from "react-redux";

const UsersCard = () => {
  const users = useSelector((state) => state.allUsers.users);
  const renderList = users.map((user) => {
    const { id, name, address, phone, email } = user;
    return (
      <div className="bg-white shadow-xl rounded-lg py-3" key={id}>
        <div className="photo-wrapper p-2">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src="./src/assets/ProfileImage.png"
            alt="User Profile"
          />
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {name}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>{email}</p>
          </div>
          <table className="text-xs my-3">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">
                  Address
                </td>
                <td className="px-2 py-2">{address.street}</td>
              </tr>
              <tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                <td className="px-2 py-2">{phone}</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center my-3">
            <a
              className="text-xs text-indigo-500 font-sans hover:underline hover:text-indigo-600 font-medium"
              href="#"
            >
              View Profile
            </a>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default UsersCard;

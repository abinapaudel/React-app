import UsersCard from "../../components/card/UsersCard";
import axios from "axios";
import { useEffect } from "react";
import { setUsers } from "../../redux/actions/Actions";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setUsers(response.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("Users: ", users);
  return (
    <div
      id="courses"
      className="bg-gray-100 grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-12 gap-4 md:p-5 p-5 md:px-10 sm:px-10 px-4"
    >
      <UsersCard />
    </div>
  );
};

export default UserList;

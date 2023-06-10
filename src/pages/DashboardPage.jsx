import { IoPeopleSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="flex gap-4 p-10">
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-400">
            <HiUserGroup className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total User</span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                12
              </strong>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
            <BsFillPostcardHeartFill className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Posts
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                12
              </strong>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
            <FaRegComments className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Comments
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                1232
              </strong>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
            <IoPeopleSharp className="text-2xl text-white" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Total Viewer
            </span>
            <div className="flex items-center">
              <strong className="text-xl text-gray-700 font-semibold">
                523
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

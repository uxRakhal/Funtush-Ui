import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Head = `text-xs text-left text-main font-semibold px-6 py-2 uppercase `;
const Text = `text-sm text-left leading-6 whitespace-nowrappx-5 py-3 pl-3  mx-2`;

  //rows

const Rows = (data, i, users, onEditFunction) => {
  return (
    <tr key={i}>
      {/* users\ */}
      {users ? (
        <>
          <td className={`${Text} `}>
            <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden ">
              {/* {data.image} */}
              <img
                className="h-full w-full  object-cover"
                src={`images/${data?.image ? data.image : "images/user.png"}`}
                alt={data?.fullName}
              />
            </div>
          </td>
          <td className={`${Text}`}>{data?._id ? data?._id : "2R75T8"}</td>
          <td className={`${Text}`}>
            {data?.createAt ? data?.createAt : "12, jan 2023"}
          </td>
          <td className={`${Text}`}>{data.fullName}</td>
          <td className={`${Text}`}>{data.email}</td>
          <td className={`${Text} float-right flex-rows gap-2 `}>
            <button className="bg-subMain text-white rounded flex-colo w-7 h-7 mr-2">
              <MdDelete />
            </button>
          </td>
        </>
      ) : (
        //categories
        <>
          <td className={`${Text} font-bold`}>2R75T8</td>
          <td className={`${Text}`}>
            {data?.createAt ? data?.createAt : "12, jan 2023"}
          </td>
          <td className={`${Text}`}>{data?.title}</td>
          <td className={`${Text} float-right flex-rows gap-2 `}>
            <button
              onClick={() => onEditFunction(data)}
              className="border border-border bg-dry flex-rows gap-2 w-20 text-border rounded py-1 px-2 "
            >
              Edit &nbsp; <FaEdit className="text-green-500" />
            </button>
            <button className="bg-subMain text-white rounded flex-colo w-7 h-7 mr-2">
              <MdDelete />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

const Table2 = ({ data, users, onEditFunction }) => {


  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full ">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray text-white">
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Full Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Email
                </th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  Id
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Title
                </th>
              </>
            )}
            <th scope="col" className={`${Head} text-end `}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800 ">
          {data?.map((data, i) => Rows(data, i, users, onEditFunction))}
        </tbody>
      </table>
    </div>
  );
};

export default Table2;
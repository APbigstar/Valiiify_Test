"use client";

import { useState } from "react";
import { MoreVertical, ChevronDown, ChevronUp } from "lucide-react";

const ApplicationTable = () => {
  const [sortField, setSortField] = useState("createDate");
  const [sortDirection, setSortDirection] = useState("desc");
  const [selectedRows, setSelectedRows] = useState([]);

  const applications = [
    {
      id: 1,
      fullName: "John Smith",
      appId: "#853081",
      email: "jsmith@gmail.com",
      product: "CC118",
      status: "Pending",
      assignedTo: "NCooper",
      createDate: "2/27/2025 3:06pm",
    },
    {
      id: 2,
      fullName: "John Smith",
      appId: "#853081",
      email: "jsmith@gmail.com",
      product: "CC118",
      status: "Pending",
      assignedTo: "NCooper",
      createDate: "2/27/2025 3:06pm",
    },
    {
      id: 3,
      fullName: "John Smith",
      appId: "#853081",
      email: "jsmith@gmail.com",
      product: "CC118",
      status: "Pending",
      assignedTo: "NCooper",
      createDate: "2/27/2025 3:06pm",
    },
    {
      id: 4,
      fullName: "John Smith",
      appId: "#853081",
      email: "jsmith@gmail.com",
      product: "CC118",
      status: "Pending",
      assignedTo: "NCooper",
      createDate: "2/27/2025 3:06pm",
    },
    {
      id: 5,
      fullName: "John Smith",
      appId: "#853081",
      email: "jsmith@gmail.com",
      product: "CC118",
      status: "Pending",
      assignedTo: "NCooper",
      createDate: "2/27/2025 3:06pm",
    },
  ];

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(applications.map((app) => app.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const sortedApplications = [...applications].sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortField] > b[sortField] ? 1 : -1;
    } else {
      return a[sortField] < b[sortField] ? 1 : -1;
    }
  });

  return (
    <div className="overflow-x-auto w-full bg-white rounded-lg shadow-sm px-6 py-5">
      <table className="table w-full">
        <thead>
          <tr className="border-b border-[#2427371A] bg-[#F6F8FA]">
            <th className="w-10">
              <input
                type="checkbox"
                className="checkbox"
                onChange={handleSelectAll}
                checked={selectedRows.length === applications.length}
              />
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("fullName")}
            >
              <div className="flex items-center">
                Full Name
                {sortField === "fullName" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </div>
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("appId")}>
              <div className="flex items-center">
                App ID
                {sortField === "appId" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </div>
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("email")}>
              <div className="flex items-center">
                Email
                {sortField === "email" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </div>
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("product")}
            >
              <div className="flex items-center">
                Product
                {sortField === "product" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </div>
            </th>
            <th className="cursor-pointer" onClick={() => handleSort("status")}>
              <div className="flex items-center">
                Status
                {sortField === "status" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </div>
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("assignedTo")}
            >
              <div className="flex items-center">
                Assigned to
                {sortField === "assignedTo" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </div>
            </th>
            <th
              className="cursor-pointer"
              onClick={() => handleSort("createDate")}
            >
              <div className="w-full flex items-center justify-between">
                Create Date
                {sortField === "createDate" &&
                  (sortDirection === "asc" ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sortedApplications.map((app) => (
            <tr
              key={app.id}
              className="hover:bg-gray-50 border-b border-[#2427371A]"
            >
              <td>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={selectedRows.includes(app.id)}
                  onChange={() => handleSelectRow(app.id)}
                />
              </td>
              <td>{app.fullName}</td>
              <td>{app.appId}</td>
              <td>{app.email}</td>
              <td>
                <span className="px-2 py-1 bg-[#242737] text-white text-xs rounded-full">
                  {app.product}
                </span>
              </td>
              <td>
                <span className="px-2 py-1 bg-[#FEF3C7] text-[#D97706] text-xs rounded-full">
                  {app.status}
                </span>
              </td>
              <td>{app.assignedTo}</td>
              <td>{app.createDate}</td>
              <td>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-xs">
                    <MoreVertical size={16} />
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>View details</a>
                    </li>
                    <li>
                      <a>Edit</a>
                    </li>
                    <li>
                      <a>Assign</a>
                    </li>
                    <li>
                      <a className="text-error">Delete</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center p-4">
        <div>
          <span className="text-sm text-gray-500">
            Showing {applications.length} of {applications.length} entries
          </span>
        </div>
        <div className="join">
          <button className="join-item btn btn-sm">«</button>
          <button className="join-item btn btn-sm btn-active">1</button>
          <button className="join-item btn btn-sm">2</button>
          <button className="join-item btn btn-sm">3</button>
          <button className="join-item btn btn-sm">»</button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTable;

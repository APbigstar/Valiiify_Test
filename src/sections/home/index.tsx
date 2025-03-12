"use client";

import StateCard from "./component/StateCard";
import MonthlyOverviewChart from "./component/MonthlyOverviewChart";
import ApplicationTable from "./component/ApplicationTable";
import ApplicationTabs from "./component/ApplicationTabs";

const HomeView = () => {
  return (
    <div className="w-full h-full bg-[#F6F8FA]">
      <div
        id="header"
        className="w-full p-[28px] flex items-center justify-between border-b border-grey"
      >
        <h2>Welcome back, Ted</h2>
        <select
          defaultValue="Pick a color"
          className="select rounded-lg w-[112px]"
        >
          <option>Admin</option>
          <option>User</option>
        </select>
      </div>
      <div id="content" className="w-full px-[28px] py-[24px]">
        <div
          id="content_header"
          className="flex w-full items-center justify-between py-[7px]"
        >
          <p className="text-base">Analytics</p>
          <select
            defaultValue="Pick a color"
            className="select rounded-lg w-[112px]"
          >
            <option>March</option>
            <option>April</option>
          </select>
        </div>
        <div
          id="content_body"
          className="w-full flex flex-col items-start justify-start gap-[12px]"
        >
          <div className="w-full grid grid-cols-5 gap-[16px]">
            <StateCard
              title="Total Applications"
              num={24}
              state={"increase"}
              percent={7.1}
              month={20}
            />
            <StateCard
              title="In Progress Applications"
              num={24}
              state={"increase"}
              percent={7.1}
              month={20}
            />
            <StateCard
              title="Approved Applications"
              num={7}
              state={"increase"}
              percent={10}
              month={6}
            />
            <StateCard
              title="Denied Applications"
              num={4}
              state={"decrease"}
              percent={33.1}
              month={3}
            />
          </div>
          <div className="w-full bg-white border border-[#2427371A] rounded-lg py-5 px-6 bg-white shadow-sm">
            <p className="text-base mb-6">Monthly Overview</p>
            <MonthlyOverviewChart />
          </div>
          <hr className="w-full border-[#2427371A]" />
          <div className="w-full flex flex-col items-start justify-start gap-[12px]">
            <div className="w-full flex items-center justify-between py-[6px]">
              <p className="text-base">Application</p>
              <ApplicationTabs />
            </div>
            <ApplicationTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;

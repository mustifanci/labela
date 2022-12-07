import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineGift, AiOutlineTrophy } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { FiUsers } from "react-icons/fi";

function Footer() {
  return (
    <div className="flex justify-between items-center fixed bottom-0 left-0 right-0 max-w-4xl my-0 mx-auto bg-slate-900 text-white border-t-2 border-x-2 border-solid border-slate-700 px-3">
      <Icon title="Home" icon="apps" />
      <Icon title="Offers" icon="offers" />
      <Icon title="Stats" icon="stats" />
      <Icon title="Payments" icon="payments" />
      <Icon title="Leaderboard" icon="leaderboard" />
      <Icon title="Teams" icon="teams" />
    </div>
  );
}

const Icon = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center gap-1 p-4 cursor-pointer">
      {(() => {
        switch (icon) {
          case "home":
            return <HiOutlineHome className="w-5 h-5" />;
          case "offers":
            return <AiOutlineGift className="w-5 h-5" />;
          case "stats":
            return <BsBarChartFill className="w-5 h-5" />;
          case "payments":
            return <MdPayments className="w-5 h-5" />;
          case "leaderboard":
            return <AiOutlineTrophy className="w-5 h-5" />;
          case "teams":
            return <FiUsers className="w-5 h-5" />;
          default:
            return <HiOutlineHome className="w-5 h-5" />;
        }
      })()}
      <span>{title}</span>
    </div>
  );
};

export default Footer;

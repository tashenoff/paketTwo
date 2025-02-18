import React from "react";
import Banner from "./Banner";

const LeaveRequest = ({ title, children }) => {
  return (
    <Banner bgimg='/img/help.jpg' className="h-[300px]" title={title}>
      {children}
      <p className="text-white font-bold">Оставьте свои данные и мы свяжемся с вами</p>

      <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
        Оставить заявку
      </button>
    </Banner>
  );
};

export default LeaveRequest;

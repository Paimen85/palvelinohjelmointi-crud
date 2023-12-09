import React from "react";
import logo from "../calendar.png";

const Home = () => {
  return (
    <div>
      <h2 className="text-center mt-5">Events calendar app</h2>
      <div className="text-center mt-5">
        <img src={logo} alt="calendar" />
      </div>
    </div>
  );
};

export default Home;

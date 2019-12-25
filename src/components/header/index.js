import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";

import "./header.scss";
const Header = () => {
  const [active, setActive] = useState("2");
  return (
    <div className="header">
      <div className="header-start">
        <img
          src="https://i.ibb.co/b3Wv9gN/task-screen3.png"
          alt="task-screen3"
          style={{ height: "80%" }}
        />
      </div>

      <div className="header-center">
        <div
          className={`icons-container ${active === "1" ? "active" : "nactive"}`}
          onClick={() => setActive("1")}
        >
          <FeatherIcon size="17" icon="users" />
          <span>Groups</span>
        </div>
        <div
          className={`icons-container ${active === "2" ? "active" : "nactive"}`}
          onClick={() => setActive("2")}
        >
          <FeatherIcon icon="message-square" size="17" />
          <span>Messages</span>
        </div>
        <div
          className={`icons-container ${active === "3" ? "active" : "nactive"}`}
          onClick={() => setActive("3")}
        >
          <FeatherIcon size="17" icon="video" />
          <span>Video Calls</span>
        </div>
      </div>
      <div className="header-end">
        <FeatherIcon icon="help-circle" size="16" />
        <FeatherIcon icon="bell" size="16" />
        <div className="user">
          <img src="https://via.placeholder.com/18" alt="user" />
          <span>Robin Wang</span>
        </div>
      </div>
    </div>
  );
};

export default Header;

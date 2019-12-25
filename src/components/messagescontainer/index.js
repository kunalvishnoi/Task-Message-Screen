import React, { useState } from "react";
import "./messagecontainer.scss";
import FeatherIcon from "feather-icons-react";
import MessageSection from "./messagesection";
import IndividualMessage from "./individualmessage";
const MessagesContainer = () => {
  const [current, setCurrent] = useState("1");
  return (
    <div className="message-container">
      <div className="top-heading">
        <FeatherIcon icon="message-square" size="28" />
        <h2 style={{ flexGrow: "1" }}>Messages</h2>
        <FeatherIcon
          icon="maximize-2"
          size="25"
          style={{ fill: "black", stroke: "black", color: "black" }}
        />
      </div>
      <div className="white-container">
        <div className="white-top">
          <div className="white-head-left">
            <p>Chats</p>
            <span>29/30</span>
          </div>
          <div className="white-head-right">
            <div
              className={`icon-container ${current === "1" ? "bb" : "bt"}`}
              onClick={() => setCurrent("1")}
            >
              <FeatherIcon icon="eye" size="20" />
              <p>Replies</p>
            </div>

            <div
              className={`icon-container ${current === "2" ? "bb" : "bt"}`}
              onClick={() => setCurrent("2")}
            >
              <FeatherIcon icon="bar-chart-2" size="20" />
              <p>Reports</p>
            </div>
          </div>
        </div>
        <div>
          <div className="message-left">
            <MessageSection />
            <IndividualMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesContainer;

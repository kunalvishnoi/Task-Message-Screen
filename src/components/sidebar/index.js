import React from "react";
import FeatherIcon from "feather-icons-react";
import "./sidebar.scss";

const SideBar = () => {
  return (
    <div className="sidebar-content">
      <img src="https://via.placeholder.com/200x100" alt="user" />
      <p>Robin Wang</p>
      <span>Life starts at the end of your comfort zone</span>
      <div className="sidebar-list">
        <div className="sidebar-option">
          <FeatherIcon
            icon="message-square"
            size="18"
            style={{ fill: "#fff" }}
          />
          <span>Messages</span>
        </div>

        <div className="sidebar-option">
          <FeatherIcon icon="" size="16" />
          <span className="primary">Chats</span>
        </div>
        <div className="sidebar-option">
          <FeatherIcon icon="" size="16" />
          <span>Send Message</span>
        </div>
        <div className="sidebar-option white">
          <FeatherIcon icon="users" size="18" />
          <span>Groups</span>
        </div>
        <div className="sidebar-option">
          <FeatherIcon icon="" size="16" />
          <span>History</span>
        </div>
        <div className="sidebar-option">
          <FeatherIcon icon="" size="16" />
          <span>Create Groups</span>
        </div>
        <div className="sidebar-option white">
          <FeatherIcon icon="video" size="18" />
          <span>Video Calls</span>
        </div>
        <div className="sidebar-option">
          <FeatherIcon icon="" size="16" />
          <span>History</span>
        </div>
        <div className="sidebar-option">
          <FeatherIcon icon="" size="16" />
          <span>Calls</span>
        </div>
      </div>
    </div>
  );
};
export default SideBar;

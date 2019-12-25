import React from "react";
import "./sass/App.scss";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import MessagesContainer from "./components/messagescontainer";
function App() {
  return (
    <>
      <Header />
      <div className="main">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="right-section">
          <MessagesContainer />
        </div>
      </div>
      <div className="footer">
        <img
          src="https://i.ibb.co/b3Wv9gN/task-screen3.png"
          alt="task-screen3"
          style={{ width: "80px" }}
        />
      </div>
    </>
  );
}

export default App;

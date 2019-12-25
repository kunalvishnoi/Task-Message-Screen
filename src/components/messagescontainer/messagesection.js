import React from "react";
import FeatherIcon from "feather-icons-react";
import "./messagesection.scss";
const MessageSection = () => {
  const messagedetail = [
    {
      id: "1",
      name: "Alexander",
      message: "I'll be send the mail soon , Thanks!!!",
      date: "19 Jan,2018",
      time: "03:40 pm",
      replies: "14",
      stats: "120/149"
    },
    {
      id: "2",
      name: "Sophia Richi",
      message: "Thanks,how about an ice-cream 🍦?",
      date: "19 Jan,2018",
      time: "03:39 pm",
      replies: "11",
      stats: "100/119"
    },
    {
      id: "3",
      name: "Ethan Malson",
      message: "Wohoo 🎧",
      date: "19 Jan,2018",
      time: "10:39 am",
      replies: "05",
      stats: "123/180"
    },
    {
      id: "4",
      name: "William",
      message: "okay please tell me the state of ....",
      date: "19 Jan,2018",
      time: "08:10 am",
      replies: "10",
      stats: "169/190"
    }
  ];
  return (
    <div className="message-section">
      <div className="message-right">
        <div className="single-message">
          <div className="user-detail">
            <img src="https://via.placeholder.com/50x50" alt="user" />
            <div className="user-name">
              <h5 className="current-name">Olivia Sol</h5>
              <span className="current-msg">
                Hey robin,this seemslike a great start 😁
              </span>
            </div>
          </div>
          <div className="below-detail">
            <span className="current-time">19 jan 2018 | 03:49 pm</span>
            <div className="stats">
              <FeatherIcon icon="eye" size="12" />
              <span className="current-stat">20 replies</span>
              <span className="divider">|</span>
              <FeatherIcon icon="bar-chart-2" size="12" />
              <span className="current-stat">111/256</span>
            </div>
          </div>
        </div>
        {messagedetail.map(data => {
          return (
            <div key={data.id} className="single-message">
              <div className="user-detail">
                <img src="https://via.placeholder.com/50x50" alt="user" />
                <div className="user-name">
                  <p>{data.name}</p>
                  <span>{data.message}</span>
                </div>
              </div>
              <div className="below-detail">
                <span>
                  {data.date} | {data.time}
                </span>
                <div className="stats">
                  <FeatherIcon icon="eye" size="12" />
                  <span>{data.replies} replies</span>
                  <span className="divider">|</span>
                  <FeatherIcon icon="bar-chart-2" size="12" />
                  <span>{data.stats}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageSection;

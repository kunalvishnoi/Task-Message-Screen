import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import FeatherIcon from "feather-icons-react";

import "react-image-lightbox/style.css";
import "./individualmessage.scss";
const images = [
  "https://i.ibb.co/bJBHPwb/beautiful-lakeside-house-in-japan.jpg",
  "https://i.ibb.co/bJBHPwb/beautiful-lakeside-house-in-japan.jpg",
  "https://i.ibb.co/bJBHPwb/beautiful-lakeside-house-in-japan.jpg"
];
const IndividualMessage = () => {
  const [photoIndex, changePhoto] = useState(0);
  const [isOpen, toggleOpen] = useState(false);
  const [icon, rotateIcon] = useState(false);
  return (
    <>
      <div className="message-right">
        <p style={{ textAlign: "center" }}>Today</p>
        <div className="sender-message">
          <img src="https://via.placeholder.com/20x20" alt="user" />
          <h3 className="sender-bubble">
            Hey Olivia 😃, Did you got a chance to see venue?
          </h3>
        </div>
        <div className="receiver-message">
          <h3 className="receiver-bubble">
            Hi robin, this seems like a great start 😁
          </h3>
        </div>
        <div className="image-message">
          <img
            src="https://via.placeholder.com/20x20"
            alt="useri"
            className="user-img"
          />
          <div className="love-symbol-container">
            <img
              src="https://i.ibb.co/bJBHPwb/beautiful-lakeside-house-in-japan.jpg"
              alt="beautiful-lakeside-house-in-japan"
              border="0"
              className="bubble-send"
              onClick={() => toggleOpen(true)}
            />
            <div className="love-symbol">
              <h4>😍</h4>
            </div>
          </div>
          <div className="three-images">
            <img
              src="https://i.ibb.co/bJBHPwb/beautiful-lakeside-house-in-japan.jpg"
              alt="beautiful-lakeside-house-in-japan"
              border="0"
              onClick={() => toggleOpen(true)}
            />
            <img
              src="https://i.ibb.co/bJBHPwb/beautiful-lakeside-house-in-japan.jpg"
              alt="beautiful-lakeside-house-in-japan"
              border="0"
              onClick={() => toggleOpen(true)}
            />
            <img
              src="https://i.ibb.co/bJBHPwb/beautiful-lakeside-house-in-japan.jpg"
              alt="beautiful-lakeside-house-in-japan"
              border="0"
              onClick={() => toggleOpen(true)}
            />
          </div>
        </div>
        <div className="input-box">
          <FeatherIcon
            icon="plus"
            size="20"
            className={`plus-button ${icon ? "rotate-45" : ""}`}
            onClick={() => rotateIcon(!icon)}
            style={{ stroke: "#fff" }}
          />
          <input
            placeholder="Omg Olivia 😍😍😍😍"
            type="text"
            style={{ flexGrow: "1" }}
          />
          <button className="send-btn">
            <FeatherIcon
              icon="send"
              size="20"
              className="plus-button"
              style={{ stroke: "#fff" }}
            />
            Send
          </button>
        </div>
        {icon ? (
          <div className="more-option">
            <div className="option" onClick={() => rotateIcon(!icon)}>
              <FeatherIcon icon="volume-2" size="16" />
              <span>Audio</span>
            </div>
            <div className="option" onClick={() => rotateIcon(!icon)}>
              <FeatherIcon icon="video" size="16" />
              <span>Video</span>
            </div>
            <div
              className="option current-option"
              onClick={() => rotateIcon(!icon)}
            >
              <FeatherIcon icon="file-text" size="16" />
              <span>Text</span>
            </div>
            <div className="option" onClick={() => rotateIcon(!icon)}>
              <FeatherIcon icon="image" size="16" />
              <span>Image</span>
            </div>
            <div className="option" onClick={() => rotateIcon(!icon)}>
              <FeatherIcon icon="mic" size="16" />
              <span>TTS</span>
            </div>
            <div className="option" onClick={() => rotateIcon(!icon)}>
              <FeatherIcon icon="film" size="16" />
              <span>Audio &amp; Text</span>
            </div>
          </div>
        ) : null}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => toggleOpen(false)}
          onMovePrevRequest={() =>
            changePhoto((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            changePhoto((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
};
export default IndividualMessage;

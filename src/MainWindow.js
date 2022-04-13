import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import socket from "./socket";

function useClientID() {
  const [clientID, setClientID] = useState("");

  useEffect(() => {
    socket.on("init", ({ id }) => {
      console.log(id);
      document.title = `${id} - VideoCall`;
      setClientID(id);
    });
    socket.on("connect", () => console.log("Connection socket"));
    socket.on("connect_error", (error) => {
      console.log("Loi roi");
      console.log(`${error}`);
    });
  }, []);

  return clientID;
}

function MainWindow({ startCall }) {
  const clientID = useClientID();
  const [friendID, setFriendID] = useState(null);

  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  const callWithVideo = (video) => {
    const config = { audio: true, video };
    return () => friendID && startCall(true, friendID, config);
  };

  return (
    <div
      className="container main-window"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <h3>
          Hi, your ID is
          <input type="text" className="txt-clientId" defaultValue={clientID} />
        </h3>
        <h4>Get started by calling a friend below</h4>
      </div>
      <div>
        <input
          type="text"
          className="txt-clientId"
          placeholder="Your friend ID"
          defaultValue="id2"
          onChange={(event) => setFriendID(event.target.value)}
        />
        <div>
          <button
            type="button"
            className="btn-action fa fa-video-camera"
            onClick={callWithVideo(true)}
          />
          <button
            type="button"
            className="btn-action fa fa-phone"
            onClick={callWithVideo(false)}
          />
        </div>
      </div>
    </div>
  );
}

MainWindow.propTypes = {
  startCall: PropTypes.func.isRequired,
};

export default MainWindow;

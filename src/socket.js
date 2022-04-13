import io from "socket.io-client";

const socket = io("https://kltnfrontend.herokuapp.com", {
  path: "/bridge",
  transports: ["websocket"],
  forceNew: true,
});

export default socket;

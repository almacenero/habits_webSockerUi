import React, { useState, useEffect } from "react";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("notificación", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      Este mensaje viene de servidor socket io: <h1>{response}</h1>
    </p>
  );
}

export default App;

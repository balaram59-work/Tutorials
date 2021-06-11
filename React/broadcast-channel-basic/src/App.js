import React from "react";
import { channel } from "./Channel";
channel.onmessage = (msg) => console.log(msg);
const send = () => channel.postMessage("clicked");
function App() {
  return (
    <div>
      <button onClick={send} />
    </div>
  );
}

export default App;

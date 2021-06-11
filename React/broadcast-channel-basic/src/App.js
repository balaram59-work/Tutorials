import React from "react";
import { BroadcastChannel } from "broadcast-channel";
const channel = new BroadcastChannel("foobar");
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

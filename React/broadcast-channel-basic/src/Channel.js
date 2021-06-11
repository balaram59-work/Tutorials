import { BroadcastChannel } from "broadcast-channel";
export const channel = new BroadcastChannel("foobar");

channel.onmessage = (msg) => console.log(msg);

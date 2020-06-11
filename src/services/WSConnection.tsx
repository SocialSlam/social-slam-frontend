import Peer from "simple-peer";
import {
  Message,
  PayloadConnections,
  PayloadNewConnection,
} from "../../../social-slam-streaming/lib/types";
import { SOCKET_URL } from "../Constants";

export const Connection = (streamId: string, token: string): WebSocket => {
  const ws = new WebSocket(SOCKET_URL);

  ws.onopen = () => {
    const payload: Message = {
      type: "connect_to_room",
      streamId,
      token,
    };
    ws.send(JSON.stringify(payload));
  };

  ws.onmessage = (msg: MessageEvent) => {
    const message = JSON.parse(msg.data);
    console.log(message);
    const [slammers, connections] = onWsMessage(ws, message);
  };

  // @ts-ignore
  ws.onclose = (code: number, msg: string) => {
    console.log(code, msg);
  };

  return ws;
};

const onWsMessage = (
  ws: WebSocket,
  msg: PayloadConnections | PayloadNewConnection,
) => {
  const peers: Peer.Instance[] = [];
  const peersStreamers: Record<string, Peer.Instance> = {};
  if (msg.type === "connections") {
    msg.connections.forEach((el) => {
      const peer = new Peer({
        initiator: true,
        trickle: false,
      });

      peer.on("signal", (signal) => {
        const payload: Message = {
          type: "send_signal",
          connId: el,
          signal: signal,
          originId: msg.socketId,
        };
        ws.send(JSON.stringify(payload));
      });

      peersStreamers[el] = peer;
      peers.push(peer);
    });

    return [peersStreamers, peers];
  } else if (msg.type === "new_connection") {
    const peer = new Peer({
      initiator: false,
      trickle: false,
    });
    peer.on("signal", (signal) => {
      const payload: Message = {
        type: "confirm_signal",
        signal: signal,
        originId: msg.originId,
      };
      ws.send(JSON.stringify(payload));
    });
    peer.signal(msg.signal);

    if (msg.isArtist) {
      peersStreamers[msg.originId] = peer;
      peers.push(peer);
    }

    return [peersStreamers, peers];
  } else if (msg.type === "returned_signal") {
    peersStreamers[msg.originId].signal(msg.signal);
  }
};

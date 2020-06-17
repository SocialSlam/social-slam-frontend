import Peer from 'simple-peer'
import {
  MessageToClient,
  MessageToServer,
} from '../../../social-slam-streaming/lib/types'
import { SOCKET_URL } from '../Constants'

export class Connection {
  streamId: string
  ws: WebSocket = new WebSocket(SOCKET_URL)
  streamers: Record<string, Peer.Instance> = {}
  connections: Peer.Instance[] = []
  private token: string
  streamEnabled: boolean = false

  constructor(streamId: string, token: string) {
    this.streamId = streamId
    this.token = token
    this._initWs()
  }

  toggleStream(stream: MediaStream) {
    if (this.streamEnabled) {
      this.connections.forEach((el) => el.removeStream(stream))
    } else {
      this.connections.forEach((el) => el.addStream(stream))
    }
  }

  private _initWs() {
    this.ws.onopen = () => {
      const payload: MessageToServer = {
        type: 'connect_to_room',
        streamId: this.streamId,
        token: this.token,
      }

      this._sendMessage(payload)
    }

    this.ws.onmessage = (msg: MessageEvent) => {
      const message = JSON.parse(msg.data)
      console.log(message)
      this._onWsMessage(message)
    }

    // @ts-ignore
    this.ws.onclose = (code: number, msg: string) => {
      console.log(code, msg)
    }
  }

  private _onWsMessage(msg: MessageToClient) {
    if (msg.type === 'connections') {
      msg.connections.forEach((el) => {
        const peer = new Peer({
          initiator: true,
          trickle: false,
        })

        peer.on('signal', (signal) => {
          const payload: MessageToServer = {
            type: 'send_signal',
            connId: el,
            signal: signal,
            originId: msg.socketId,
          }
          this._sendMessage(payload)
        })

        this.streamers[el] = peer
        this.connections.push(peer)
      })
    } else if (msg.type === 'new_connection') {
      const peer = new Peer({
        initiator: false,
        trickle: false,
      })
      peer.on('signal', (signal) => {
        const payload: MessageToServer = {
          type: 'confirm_signal',
          signal: signal,
          originId: msg.originId,
        }
        this._sendMessage(payload)
      })

      peer.signal(msg.signal)

      if (msg.isArtist) {
        this.streamers[msg.originId] = peer
        this.connections.push(peer)
      }
    } else if (msg.type === 'returned_signal') {
      this.streamers[msg.originId].signal(msg.signal)
    }
  }

  private _sendMessage(payload: object | string) {
    if (typeof payload !== 'string') {
      payload = JSON.stringify(payload)
    }
    this.ws.send(payload)
  }
}

export class StreamConnection {
  streamId: string
  private readonly token: string
  streamEnabled = false

  constructor(streamId: string, token: string) {
    this.streamId = streamId
    this.token = token
  }
}

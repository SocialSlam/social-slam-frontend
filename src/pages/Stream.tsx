import React, { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { VideoContainer } from '../components/VideoCard'
import { StreamConnection } from '../services/StreamConnection'

export type StreamProps = unknown

export type StreamParams = {
  streamId: string
}

export const Stream: React.FC<StreamProps> = (props) => {
  const { streamId } = useParams<StreamParams>()
  const socketRef = useRef<StreamConnection>()
  const mediaRef = useRef<HTMLVideoElement>()

  useEffect(() => {
    socketRef.current = new StreamConnection(streamId, '')
  }, [])

  const toggleStream = async () => {
    if (mediaRef.current.srcObject) {
      ;(mediaRef.current.srcObject as MediaStream)
        .getTracks()
        .forEach((el) => el.stop())
    } else {
      mediaRef.current.srcObject = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      })
    }
  }

  return (
    <Layout>
      <button onClick={() => toggleStream()}>Toggle Video</button>

      {/* <video controls autoPlay ref={mediaRef} /> */}
    </Layout>
  )
}

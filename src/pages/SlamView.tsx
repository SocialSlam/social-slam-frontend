import React, {useEffect, useRef} from 'react'
import {useParams} from 'react-router-dom'
import {Layout} from '../components/Layout'
import {StreamConnection} from '../services/StreamConnection'

export type StreamProps = unknown

export type StreamParams = {
  streamId: string
}

const VideoConference = () => {
  const jitsiContainerId = "jitsi-container-id";

  const loadJitsiScript = () => {
    let resolveLoadJitsiScriptPromise = null;

    const loadJitsiScriptPromise = new Promise((resolve) => {
      resolveLoadJitsiScriptPromise = resolve;
    });

    const script = document.createElement("script");
    script.src = "https://meet.jit.si/external_api.js";
    script.async = true;
    script.onload = resolveLoadJitsiScriptPromise
    document.body.appendChild(script);

    return loadJitsiScriptPromise;
  };

  return <div id={jitsiContainerId} style={{height: 720, width: "100%"}} />;
};


export const SlamStream: React.FC<StreamProps> = (props) => {
  const {streamId} = useParams<StreamParams>()
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

import React, { useEffect, useRef, useState } from 'react'

import { Layout } from '../components'
import { Box } from 'rebass'
import styled from 'styled-components'

export const Stream = (props) => {
  useEffect(() => {
    socketRef.current = io.connect('/')
    navigator.mediaDevices.getUserMedia()
  }, [])

  return <Layout skipHeader={true} skipMenu={true}></Layout>
}

export default Stream

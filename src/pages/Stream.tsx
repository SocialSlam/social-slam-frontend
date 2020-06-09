import React, { useEffect, useRef, useState } from 'react'
import { Layout } from '../components/Layout'
import { Box } from 'rebass'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { Connection } from '../services/WSConnection'

export type StreamProps = {}

export type StreamParams = {
  streamId: string
}

export const Stream: React.FC<StreamProps> = (props) => {
  const [ws, setWs] = useState<WebSocket>(undefined)
  const socketRef = useRef<HTMLVideoElement>()
  const [peers, setPeers] = useState([])
  const { streamId } = useParams<StreamParams>()

  console.log(streamId)

  const tokens = {
    tokenA:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNvY2lhbF9zbGFtX2FkbWluIiwiZXhwIjoxNTkxNzA4NTkxLCJvcmlnSWF0IjoxNTkxNzA4MjkxfQ.Ki9BMu_cKMrXJ9pH7oKvBIM1CkJk7qk9TUGUEvAAwC0',
    tokenB:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmF2byIsImlhdCI6MTUxNjIzOTAyMn0.n-Fsy8Jx6q9IubgaNZUgooNcsUG_58OVgE9MUTLkMVs',
  }

  useEffect(() => {
    const newWs = Connection(streamId, tokens.tokenA)
    setWs(newWs)
  }, [])

  return <Layout></Layout>
}

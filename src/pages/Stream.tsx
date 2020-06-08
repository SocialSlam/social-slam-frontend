import React, { useEffect, useRef, useState } from 'react'

import { Layout } from '../components/Layout'
import { Box } from 'rebass'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

export type StreamProps = {

}

export type StreamParams = {
  streamId: string
}

export const Stream: React.FC<StreamProps> = (props) => {
  const socketRef = useRef<HTMLVideoElement>()
  const [peers, setPeers] = useState([])
  const { streamId } = useParams<StreamParams>()

  console.log(streamId)

  const tokens = {
    tokenA: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbHBoYSIsImlhdCI6MTUxNjIzOTAyMn0.ok55AeE5LVEUYuWU4eLyBjdomKRBNtMoxuA3tkBMRuY',
    tokenB: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmF2byIsImlhdCI6MTUxNjIzOTAyMn0.n-Fsy8Jx6q9IubgaNZUgooNcsUG_58OVgE9MUTLkMVs',
  }


  useEffect(() => {


  }, [])

  return <Layout>

  </Layout>
}

import { faPaperPlane, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Textarea } from '@rebass/forms'
import moment from 'moment'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Box, Flex, Link, Text } from 'rebass'
import styled from 'styled-components'
import { Layout } from '../components'
import './View.scss'

import io from 'socket.io-client'
import Peer from 'simple-peer'
import { v5 as uuid } from 'uuid'

const tempInfo = {
  dateTime: '2020-04-27 20:00:00',
  title: 'Stream Title',
  tags: ['tag1', 'tag2'],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  chat: [
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:01:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:02:00' },
    { user: 'user 1', text: 'Lorem ipsum', dateTime: '27.04.2020 20:03:00' },
    { user: 'user 2', text: 'Lorem ipsum', dateTime: '27.04.2020 20:04:00' },
  ],
}

const Video = (props) => {
  let vidContainer
  let width
  let height
  //   try {
  //     vidContainer = window.document.getElementById('video-container')
  //     if (props.totalStreams === 1) {
  //       width = vidContainer.clientWidth
  //       height = vidContainer.clientHeight
  //     } else if (props.totalStreams > 1) {
  //       width = vidContainer.clientWidth / 2
  //       height = vidContainer.clientHeight
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  //   console.log(vidContainer, width, height)

  return (
    <video
      autoPlay
      ref={props.stream}
      style={{
        width: width || '100%',
        height: height || '100%',
        objectFit: 'cover',
      }}
    />
  )
}

const VideoContainer = (props) => {
  return (
    <Box
      id="video-container"
      sx={{
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: 'repeat(auto-fit, minmax(128px, 1fr))',
      }}
    >
      {props.streams.map((el, i) => {
        return <Video key={i} stream={el} totalStreams={props.streams.length} />
      })}
    </Box>
  )
}

const MiscContainer = (props) => {
  const date = moment(tempInfo.dateTime)
  return (
    <Box>
      <Flex justifyContent="space-between" className="misc-video-info">
        <Box p={2} width={1 / 3} flex="flex-grow">
          {date.format('L')} - {date.format('LT')}
        </Box>
        <Box p={2} width={1 / 3} className="misc-interract-btns-container">
          {props.streamers.map((el, i) => {
            return (
              <Text className="misc-interract-btns" key={i}>
                <FontAwesomeIcon icon={faThumbsUp} className="cursor-pointer" />
                &nbsp; &nbsp;
                <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  className="cursor-pointer"
                />
              </Text>
            )
          })}
        </Box>
        <Box p={3} width={1 / 3}></Box>
      </Flex>
      <Box>
        <Box p={3}>
          <Text>
            <b>{tempInfo.title}</b>{' '}
            <span className="float-right color-lightgrey">
              Viewers: {props.viewerCount.toString()}
            </span>
          </Text>
          <Text fontSize={1}>
            {tempInfo.tags.map((tag, i) => (
              <Fragment key={i}>
                <Link href={`#${tag}`} className="link-unstyled">
                  <b>#{tag}</b>
                </Link>
                &nbsp;
              </Fragment>
            ))}
          </Text>
        </Box>
        <Box p={3}>
          <Text mb={2}>Description</Text>
          <Text>{tempInfo.description}</Text>
        </Box>
      </Box>
    </Box>
  )
}

const ChatContainer = (props) => {
  const [chatText, setChatText] = useState([])
  const { values, onSend } = props

  return (
    <Box>
      <Box py={2} px={3} overflowY="scroll" className="chat-log-container">
        {values.map((el, i) => (
          <Text key={i}>
            <b>{el.user}: </b>
            {el.text}
          </Text>
        ))}
      </Box>
      <Flex ml={2} height={70} className="chat-input-container">
        <Box as="form" onSubmit={(e) => e.preventDefault()} py={3} width={1}>
          <Flex mx={-2} mb={0}>
            <Box width={4 / 5} px={2}>
              <Textarea
                className={`chat-input ${
                  chatText.length > 0 ? 'color-grey' : 'color-lightgrey'
                }`}
                style={{ resize: 'none' }}
                value={chatText}
                onChange={(e) => {
                  if (e.target.value.length <= 200) {
                    setChatText(e.target.value)
                  }
                }}
              />
            </Box>
            <Box width={1 / 5} px={2}>
              <FontAwesomeIcon
                onClick={() => {
                  onSend({ text: chatText })
                  setChatText('')
                }}
                className="chat-button"
                color={chatText.length > 0 ? 'grey' : 'lightgrey'}
                icon={faPaperPlane}
              />
            </Box>
          </Flex>
          <Box width={1}>
            <Text
              className="chat-input-counter"
              color={chatText.length > 0 ? 'grey' : 'lightgrey'}
            >
              {chatText.length}/200
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export const View = (props) => {
  const socketRef = useRef()
  const peersRef = useRef([])
  const [peers, setPeers] = useState([])
  const [viewerCount, setViewerCount] = useState(0)
  const [chatLog, setChatLog] = useState([])

  const streamId = props.match.params.streamId
  const username = 'John'

  useEffect(() => {
    socketRef.current = io('localhost:4000')

    socketRef.current.emit('connect_to_room', {
      streamId,
      //   token:
      //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbHBoYSIsImlhdCI6MTUxNjIzOTAyMn0.ok55AeE5LVEUYuWU4eLyBjdomKRBNtMoxuA3tkBMRuY',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJicmF2byIsImlhdCI6MTUxNjIzOTAyMn0.n-Fsy8Jx6q9IubgaNZUgooNcsUG_58OVgE9MUTLkMVs',
    })

    // artists: Set<string>, sockets: Set<string>
    socketRef.current.on('connections', (payload) => {
      const { artists, sockets } = payload
      const peers = []

      sockets.forEach((socketId) => {
        const peer = createPeer(socketId, socketRef.current.id)
        peers.push(peer)
        if (artists.contains(socketId)) {
          peersRef.current.push({
            socketId,
            peer,
          })
        }
      })

      setViewerCount(peers.length)
      setPeers(peers)
    })

    socketRef.current.on('message', (payload) => {
      if (payload.error) {
        console.error(payload)
      } else {
        console.info(payload)
      }
    })

    socketRef.current.on('new_connection', (payload) => {
      const peer = addPeer(payload.signal, payload.callerId)
      peers.push(peer)
      //         peersRef.current.push({
      //     socketId: payload.callerId,
      //     peer,
      //   })
    })

    socketRef.current.on('confirming_connection', (payload) => {
      const connection = peersRef.current.find(
        (p) => p.socketId === payload.socketId
      )
      connection.peer.signal(payload.signal)
    })
  }, [])

  const createPeer = (socketId, callerId) => {
    const peer = new Peer({ initiator: true, trickle: false })

    peer.on('signal', (signal) => {
      socketRef.current.emit('send_signal', {
        socketId,
        callerId,
        signal,
      })
    })

    return peer
  }

  const addPeer = (incomingSignal, callerId) => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
    })

    peer.on('signal', (signal) => {
      socketRef.current.emit('receive_signal', { signal, callerId })
    })

    peer.on('data', (newMsg) => {
      chatLog.push(newMsg)
      setChatLog(chatLog)
    })

    peer.signal(incomingSignal)

    return peer
  }

  const messagePeers = (newMsg) => {
    peers.forEach((peer) => {
      peer.send(newMsg)
    })
  }

  return (
    <Layout skipHeader={false} skipMenu={true}>
      <Flex flexWrap="wrap" mx={-2}>
        <Box
          width={9 / 12}
          px={2}
          py={2}
          style={{ borderRight: 'lightgrey 2px solid' }}
        >
          <Box m={2} style={{ border: 'grey 1px solid' }}>
            <VideoContainer streams={peersRef} />
          </Box>
          <Box m={2}>
            <MiscContainer viewerCount={viewerCount} streamers={['', '']} />
          </Box>
        </Box>
        <Box width={3 / 12} px={2} py={2}>
          {/* TODO: Replace the chat with a 3rd party module? */}
          <ChatContainer
            username
            values={chatLog}
            onSend={(newMsg) => {
              newMsg.user = username
              chatLog.push(newMsg)
              setChatLog(chatLog)
              messagePeers(newMsg)
            }}
          />
        </Box>
      </Flex>
    </Layout>
  )
}

export default View

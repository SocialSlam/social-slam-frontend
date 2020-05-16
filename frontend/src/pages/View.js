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

const StyledVideo = styled.video`
  height: 40%;
  width: 50%;
`

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
  //   const ref = useRef()

  //   useEffect(() => {
  //     props.peer.on('stream', (stream) => {
  //       ref.current.srcObject = stream
  //     })
  //   }, [])

  return <StyledVideo playsInline autoPlay ref={props.stream} />
}

const VideoContainer = (props) => {
  //  {peers.map((peer, i) => (
  //           <Box p={0} color="black" bg="blue">
  //             <Video peer={peer} />
  //           </Box>
  //         ))}

  return props.streams.map((el, i) => {
    return <Video key={i} stream={el} />
  })
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

  return (
    <Box>
      <Box py={2} px={3} overflowY="scroll" className="chat-log-container">
        {tempInfo.chat.map((el, i) => (
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
                  console.log(chatText)
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
  const [peers, setPeers] = useState([])
  const socketRef = useRef()
  const userVideo = useRef()
  const peersRef = useRef([])
  const [viewerCount, setViewerCount] = useState(0)

  const jamId = props.match.params.streamId

  useEffect(() => {
    // socketRef.current = io.connect('/')
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        userVideo.current.srcObject = stream
        // socketRef.current.emit('connect', {
        //   streamId: jamId,
        //   username: 'alpha',
        // })

        // socketRef.current.on('connections', ({ artists, sockets }) => {
        //   const peers = []
        //   artists.forEach((artistId) => {
        //     const peer = createPeer(artistId, socketRef.current.id, stream)
        //   })
        // })
      })
  }, [])

  // const createPeer = (userToSignal, callerID, stream) => {
  //   const peer = new Peer({
  //     initiator: true,
  //     trickle: false,
  //     stream,
  //   })

  //   peer.on('message', (signal) => {
  //     socketRef.current.emit('sending signal', {
  //       userToSignal,
  //       callerID,
  //       signal,
  //     })
  //   })

  //   return peer
  // }

  const gridElementOptions = {
    padding: '2px',
    alignSelf: 'stretch',
    justifySelf: 'stretch',
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
            <VideoContainer streams={[userVideo, userVideo]} />
          </Box>
          <Box m={2}>
            <MiscContainer viewerCount={viewerCount} streamers={['', '']} />
          </Box>
        </Box>
        <Box width={3 / 12} px={2} py={2}>
          <ChatContainer />
        </Box>
      </Flex>
    </Layout>
  )
}

export default View

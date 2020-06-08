import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Box, Text, Flex } from 'rebass'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export type ChatEntry = {
  user: string
  text: string
  timestamp: string
}

export type ChatSubmitObject = {
  text: string
  user?: string
}

export type ChatProps = {
  chatLog: ChatEntry[]
  onSend: (chatObject: ChatSubmitObject) => void
}

const StyledChatInput = styled.input`
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  margin-left: 10px;
  resize: 'none';
`

const StyledChatLogContainer = styled(Box)`
  height: calc(100vh - 70px - 50px - 150px);
`

const StyledChatInputContainer = styled(Flex)`
  border-top: 2px lightgrey solid;
  position: absolute;
  bottom: 0;
  margin-bottom: 70px;

  .color-lightgrey {
    color: lightgrey;
  }

  .color-grey {
    color: grey;
  }
`

const StyledChatSubmitButton = styled(FontAwesomeIcon)`
  font-size: 1.2em;
  margin-top: 40px;
`

const StyledChatInputCounter = styled(Text)`
  float: right;
  padding-right: 55px;
`

export const Chat: React.FC<ChatProps> = ({ chatLog, onSend }) => {
  const [chatText, setChatText] = useState<string>('')

  return (
    <Box>
      <StyledChatLogContainer py={2} px={3} overflowY="scroll">
        {chatLog.map((el, i) => (
          <Text key={i}>
            <b>{el.user}: </b>
            {el.text}
          </Text>
        ))}
      </StyledChatLogContainer>
      <StyledChatInputContainer ml={2} height={70}>
        <Box onSubmit={(e) => e.preventDefault()} py={3} width={1}>
          <Flex mx={-2} mb={0}>
            <Box width={4 / 5} px={2}>
              <StyledChatInput
                className={
                  chatText.length > 0 ? 'color-grey' : 'color-lightgrey'
                }
                value={chatText}
                onChange={(e) => {
                  if (e.target.value.length <= 200) {
                    setChatText(e.target.value)
                  }
                }}
              />
            </Box>
            <Box width={1 / 5} px={2}>
              <StyledChatSubmitButton
                onClick={() => {
                  onSend({ text: chatText })
                  setChatText('')
                }}
                className={
                  chatText.length > 0 ? 'color-grey' : 'color-lightgrey'
                }
                icon={faPaperPlane}
              />
            </Box>
          </Flex>
          <Box width={1}>
            <StyledChatInputCounter
              className={chatText.length > 0 ? 'color-grey' : 'color-lightgrey'}
            >
              {chatText.length}/200
            </StyledChatInputCounter>
          </Box>
        </Box>
      </StyledChatInputContainer>
    </Box>
  )
}

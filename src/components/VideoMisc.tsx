import * as React from 'react'
import { Box, Flex, Text } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faThumbsUp,
  faHandHoldingHeart,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export interface MiscContainerProps {
  date: string
  streamers: any[]
  title: string
  tags: string[]
  viewerCount: number
  description: string
}

const StyledButtonsToolbar = styled(Box)`
  cursor: default;
  display: inline-flex;

  .misc-interract-btns {
    margin: auto;
  }
`

const StyledVideoMiscContainer = styled(Box)`
  .misc-video-info {
    border-bottom: 2px lightgrey solid;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .link-unstyled {
    color: inherit;
    text-decoration: none;
  }

  .float-right {
    float: right;
  }
`

export const MiscContainer: React.FC<MiscContainerProps> = ({
  date,
  streamers,
  title,
  tags,
  viewerCount,
  description,
}) => {
  return (
    <StyledVideoMiscContainer>
      <Flex justifyContent="space-between" className="misc-video-info">
        <Box p={2} width={1 / 3} flex="flex-grow">
          {date}
        </Box>
        <StyledButtonsToolbar p={2} width={1 / 3}>
          {streamers.map((el, i) => {
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
        </StyledButtonsToolbar>
        <Box p={3} width={1 / 3}></Box>
      </Flex>
      <Box>
        <Box p={3}>
          <Text>
            <b>{title}</b>{' '}
            <span className="float-right color-lightgrey">
              Viewers: {viewerCount.toString()}
            </span>
          </Text>
          <Text fontSize={1}>
            {tags.map((tag, i) => (
              <React.Fragment key={i}>
                <Link className="link-unstyled" to={`#${tag}`}>
                  <b>#{tag}</b>
                </Link>
                &nbsp;
              </React.Fragment>
            ))}
          </Text>
        </Box>
        <Box p={3}>
          <Text mb={2}>Description</Text>
          <Text>{description}</Text>
        </Box>
      </Box>
    </StyledVideoMiscContainer>
  )
}

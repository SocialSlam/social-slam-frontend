import * as React from 'react'
import { Layout } from '../components/Layout'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { GQLEvent } from '../TypeUtils'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Card, Flex, Image, Text } from 'rebass/styled-components'

const StyledHomeHero = styled(Flex)`
  border: black 1px solid;
  height: 580px;
  max-height: 60%;
  background-image: url(https://afmec.org/images/no-image-available-icon.jpg);
`

const StyledSearch = styled(Flex)`
  background-color: white;
  width: 40%;
  margin: auto;
`

const StyledFeaturedStreamsWrapper = styled(Flex)``

export const Home: React.FC = () => {
  const [search, setSearch] = React.useState<string>('')

  // @ts-ignore
  const { featured, categories = [] } = {}

  const events: Array<GQLEvent> = [
    {
      id: 0,
      datetime: '21.03.20',
      title: 'Fetzige Gesangsparade',
      description: 'lorem ipsum',
    },
    {
      id: 1,
      datetime: '27.04.20',
      title: 'Corona verliert! #Wirvsvirus',
      description: 'lorem ipsum',
    },
  ]

  return (
    <Layout>
      <StyledHomeHero>
        <StyledSearch>
          <Input
            sx={{ width: '100%' }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            sx={{ whiteSpace: 'nowrap' }}
            text={
              <React.Fragment>
                Search <FontAwesomeIcon icon={faSearch} />
              </React.Fragment>
            }
          />
        </StyledSearch>
      </StyledHomeHero>

      <StyledFeaturedStreamsWrapper mx={4} my={4}>
        {events.map((el, i) => {
          return (
            <Card key={i} width={256} mx={2}>
              <Image
                src={'https://afmec.org/images/no-image-available-icon.jpg'}
              />
              <Text fontSize={1} fontWeight="bold">
                {el.title}
              </Text>
              <Text fontSize={1} color="grey">
                {el.datetime}
              </Text>
            </Card>
          )
        })}
      </StyledFeaturedStreamsWrapper>
    </Layout>
  )
}

import * as React from 'react'
import { Box, Flex, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import cityLight from 'url:../assets/images/citylight.png'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Layout } from '../components/Layout'
import { GlobalStyleProps, GlobalStyle } from '../Theme'
import { useSelector, shallowEqual } from 'react-redux'
import { CombinedReducer } from '../redux/Reducer'
import { UserResetPassword, InputLabel } from '../TypeUtils'
import { useHistory, Link } from 'react-router-dom'
import { AuthState } from '../redux/auth/AuthReducer'
import {
  ROUTE_REGISTER,
  ASYNC_STATUS,
  REG_EXP_EMAIL,
  REG_EXP_PASSWORD,
  ROUTE_RESET_PASSWORD,
  ROUTE_HOME,
} from '../Constants'

interface FooterProps {
  style?: React.CSSProperties
}

const StyledImage = styled(Box)`
  background-image: url(${cityLight})
`

const StyledBackground = styled(Text)`
	position: absolute;
	width: 440px;
	height: 153px;
	left: 155px;
	top: 305px;
`

const StyledBackgroundText = styled(Text)`
	color: ${({ theme }: GlobalStyleProps) => theme.colors.blue};
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 55px;
	line-height: 120%;
`

const Background: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <StyledBackground>
      <StyledBackgroundText>
        Forgot
					<br />
					password?
				</StyledBackgroundText>
    </StyledBackground>
  )
}

const inputLabel: InputLabel = { title: 'Email', state: 'email' }

export const ResetPassword: React.FC = () => {
  const [formInput, setFormInput] = React.useState<UserResetPassword>({
    email: '',
  })

  const [formIsInvalid, setFormIsInvalid] = React.useState({
    email: undefined,
    password: undefined,
  })

  const auth = useSelector<CombinedReducer, AuthState>(
    (state) => state.authReducer,
    shallowEqual
  )

  const isLoading = auth.status === ASYNC_STATUS.PENDING
  const disableButton =
    isLoading ||
    Object.values(formIsInvalid).includes(true) ||
    Object.values(formIsInvalid).includes(undefined)

  const onResetClick = () => {
    // TODO
  }

  const validateInput = (key: string, value: string) => {
    const update = {}
    switch (key) {
      case 'email':
        update[key] = !REG_EXP_EMAIL.test(value)
        break
      default:
    }

    setFormIsInvalid({
      ...formIsInvalid,
      ...update,
    })
  }

  const onInputChange = (value: string, el: InputLabel) => {
    validateInput(el.state, value)

    setFormInput({
      ...formInput,
      [el.state]: value,
    })
  }

  return (
    <Layout>
      <Flex>
        <Box width={1 / 2}>
          <Background />
          <Box css={{
            position: 'absolute',
            width: '440px',
            height: '63px',
            left: '155px',
            top: '458px',

            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '15px',
            lineHeight: '150%',
            /* or 22px */
            /* Social_slam_purple */

            color: '#5C63FF',
          }}>
            Enter the email address associated with your account.
          </Box>
          <Box mx="auto" maxWidth="500px">
            <Input
              title={inputLabel.title}
              value={formInput[inputLabel.state]}
              isInvalid={formIsInvalid[inputLabel.state]}
              invalidMessage={
                inputLabel.state === 'email'
                  ? 'Please fill out your email'
                  : undefined
              }
              type={inputLabel.state.includes('email') ? 'email' : undefined}
              onChange={(e) => onInputChange(e.target.value, inputLabel)}
            />
          </Box>
          <Box>
            <Box width={1 / 2} css={{
              position: 'absolute',
              width: '361px',
              height: '63px',
              left: '155px',
              top: '607px',

              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '11px',
              lineHeight: '150%',
              display: 'flex',
              alignItems: 'flex-end',
              color: '#5C63FF',
            }}>
              <Link to={ROUTE_REGISTER}>
                <Text color="primary" fontWeight="bold">
                  Don't have an account yet?
                  <br />
                  <span className="color-green">Register</span> here
                </Text>
              </Link>
            </Box>
            <Box width={1 / 2}>
              <Button
                text="Send Reset Link"
                sx={{ float: 'right' }}
                onClick={onResetClick}
                isLoading={isLoading}
                disabled={disableButton}
              />
            </Box>
          </Box>
        </Box>
        <StyledImage width={1 / 2} />
      </Flex>
    </Layout >
  )
}
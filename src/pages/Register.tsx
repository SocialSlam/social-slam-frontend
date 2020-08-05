import * as React from 'react'
import { Box, Flex, Text } from 'rebass/styled-components'
import styled from 'styled-components'
import logoBlack from 'url:../assets/images/logo_black.svg'
import bgShape from 'url:../assets/shapes/triangle-corner.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Layout } from '../components/Layout'
import { GlobalStyleProps } from '../Theme'
import { useSelector, shallowEqual } from 'react-redux'
import { CombinedReducer } from '../redux/Reducer'
import { authRegisterAction } from '../redux/auth/AuthAction'
import { UserRegister } from '../TypeUtils'
import { useHistory } from 'react-router-dom'
import { AuthState } from '../redux/auth/AuthReducer'
import {
  ROUTE_REGISTER,
  ASYNC_STATUS,
  REG_EXP_EMAIL,
  REG_EXP_PASSWORD,
} from '../Constants'

interface FooterProps {
  image: any
  style?: React.CSSProperties
}
type InputLabel = { title: string; state: string }

const StyledBackground = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  height: 80%;
  z-index: -1;
`

const StyledBackgroundText = styled(Text)`
  color: ${({ theme }: GlobalStyleProps) => theme.colors.background};
  position: absolute;
  top: 120px;
  font-size: xxx-large;
  left: 70px;
  font-weight: bolder;
`

const Background: React.FC<FooterProps> = ({ image, ...props }) => {
  return (
    <StyledBackground>
      <img src={image} style={{ height: '80%' }} />
      <StyledBackgroundText>
        Tip local
        <br />
        stay social
      </StyledBackgroundText>
    </StyledBackground>
  )
}

const inputLabels: InputLabel[] = [
  { title: 'First name', state: 'firstName' },
  { title: 'Last name', state: 'lastName' },
  { title: 'Username', state: 'username' },
  { title: 'Email', state: 'email' },
  { title: 'Password', state: 'password' },
  { title: 'Repeat password', state: 'passwordRepeat' },
  { title: 'Location', state: 'location' },
]

export const Register: React.FC = () => {
  const [formInput, setFormInput] = React.useState<UserRegister>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    passwordRepeat: '',
    location: '',
  })
  const [formIsInvalid, setFormIsInvalid] = React.useState({
    firstName: undefined,
    lastName: undefined,
    username: undefined,
    email: undefined,
    password: undefined,
    passwordRepeat: undefined,
    location: undefined,
  })

  const auth = useSelector<CombinedReducer, AuthState>(
    (state) => state.authReducer,
    shallowEqual
  )
  const history = useHistory()

  React.useEffect(() => {
    if (auth?.token) {
      history.push(ROUTE_REGISTER)
    }
  }, [auth])

  const isLoading = auth.status === ASYNC_STATUS.PENDING
  const disableButton =
    isLoading ||
    Object.values(formIsInvalid).includes(true) ||
    Object.values(formIsInvalid).includes(undefined)

  const onRegisterClick = () => {
    authRegisterAction(formInput)
  }

  const validateInput = (key: string, value: string) => {
    const update = {}
    switch (key) {
      case 'firstName':
      case 'lastName':
      case 'username':
      case 'location':
        update[key] = typeof value !== 'string' || value.length < 1
        break
      case 'email':
        update[key] = !REG_EXP_EMAIL.test(value)
        break
      case 'password':
        update[key] = !REG_EXP_PASSWORD.test(value)

        if (formInput.passwordRepeat.length > 0) {
          update['passwordRepeat'] = value !== formInput.passwordRepeat
        }
        break
      case 'passwordRepeat':
        update[key] = formInput.password !== value
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
      <Background image={bgShape} />
      <Flex>
        <Box width={1 / 2} />
        <Box width={1 / 2} py={3}>
          <img
            src={logoBlack}
            style={{
              margin: '0 auto',
              display: 'block',
              width: '160px',
              padding: '2rem 0',
            }}
          />
          <Box mx="auto" maxWidth="500px">
            {inputLabels.map((el, i) => (
              <Input
                key={i}
                sx={{ marginBottom: 2 }}
                title={el.title}
                value={formInput[el.state]}
                isInvalid={formIsInvalid[el.state]}
                invalidMessage={
                  el.state === 'password'
                    ? 'Must contain minimum eight characters, at least one letter, one number and one special character'
                    : el.state === 'passwordRepeat'
                    ? 'Passwords are not equal'
                    : undefined
                }
                type={el.state.includes('password') ? 'password' : undefined}
                onChange={(e) => onInputChange(e.target.value, el)}
              />
            ))}
            <Button
              text="Register"
              sx={{ float: 'right' }}
              onClick={onRegisterClick}
              isLoading={isLoading}
              disabled={disableButton}
            />
          </Box>

          <Box mx="auto"></Box>
        </Box>
      </Flex>
    </Layout>
  )
}

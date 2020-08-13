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
import { authRegisterAction, authLoginAction } from '../redux/auth/AuthAction'
import { UserRegister, UserLogin, InputLabel } from '../TypeUtils'
import { useHistory, Link } from 'react-router-dom'
import { AuthState } from '../redux/auth/AuthReducer'
import {
  ROUTE_REGISTER,
  ASYNC_STATUS,
  REG_EXP_EMAIL,
  REG_EXP_PASSWORD,
  ROUTE_HOME,
} from '../Constants'

interface FooterProps {
  image: any
  style?: React.CSSProperties
}

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
  { title: 'Email', state: 'email' },
  { title: 'Password', state: 'password' },
]

export const Login: React.FC = () => {
  const [formInput, setFormInput] = React.useState<UserLogin>({
    email: '',
    password: '',
  })
  const [formIsInvalid, setFormIsInvalid] = React.useState({
    email: undefined,
    password: undefined,
  })
  const [resetPassword, setResetPassword] = React.useState<boolean>(false)

  const auth = useSelector<CombinedReducer, AuthState>(
    (state) => state.authReducer,
    shallowEqual
  )

  const history = useHistory()

  React.useEffect(() => {
    if (auth?.token) {
      history.push(ROUTE_HOME)
    }
  }, [auth])

  const isLoading = auth.status === ASYNC_STATUS.PENDING
  const disableButton =
    isLoading ||
    Object.values(formIsInvalid).includes(true) ||
    Object.values(formIsInvalid).includes(undefined)

  const onLoginClick = () => {
    authLoginAction(formInput)
  }

  const validateInput = (key: string, value: string) => {
    const update = {}
    switch (key) {
      case 'email':
        update[key] = !REG_EXP_EMAIL.test(value)
        break
      case 'password':
        update[key] = typeof value !== 'string' || value.length < 1
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
        <Box width={1} py={3}>
          <img
            src={logoBlack}
            style={{
              margin: '0 auto',
              display: 'block',
              width: '160px',
              padding: '2rem 0',
            }}
          />
          {true && (
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
                      ? 'Dont forget to add your password!'
                      : undefined
                  }
                  type={el.state.includes('password') ? 'password' : undefined}
                  onChange={(e) => onInputChange(e.target.value, el)}
                />
              ))}

              <Flex pt={4}>
                <Box width={1 / 2}>
                  <Text
                    onClick={() => setResetPassword(true)}
                    color="primary"
                    fontWeight="bold"
                    className="cursor-pointer"
                  >
                    Forgot password?
                  </Text>
                  <br />
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
                    text="Login"
                    sx={{ float: 'right' }}
                    onClick={onLoginClick}
                    isLoading={isLoading}
                    disabled={disableButton}
                  />
                </Box>
              </Flex>
            </Box>
          )}
        </Box>
      </Flex>
    </Layout>
  )
}

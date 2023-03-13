import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import {BgColor, Logo} from '../Home/styledComponents'

import AllContext from '../../context/AllContext'

import {
  Container,
  LoginImg,
  FormContainer,
  HeadingForm,
  Label,
  Input,
  Select,
  RegisterNow,
  ErrorMsg,
} from './styledComponents'

class Register extends Component {
  //   changeName = props => {
  //     this.setState({username: props.target.value})
  //   }

  //   changeSelect = props => {
  //     this.setState({selectTopic: props.target.value})
  //   }

  render() {
    return (
      <AllContext.Consumer>
        {value => {
          const {
            topicsList,
            RegisterNowClick,
            errorMsg,
            userName,
            topic,
            clickInput,
            clickSelect,
          } = value

          const clickRegisterNow = event => {
            event.preventDefault()
            RegisterNowClick()
            if (userName.length !== 0) {
              const {history} = this.props
              history.replace('/')
            }
          }

          const changeName = event => {
            clickInput(event.target.value)
          }

          const changeSelect = event => {
            clickSelect(event.target.value)
          }

          return (
            <BgColor>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
                alt="website logo"
              />
              <Container>
                <LoginImg
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <FormContainer onSubmit={clickRegisterNow}>
                  <HeadingForm>Let us join</HeadingForm>
                  <Label htmlFor="name">NAME</Label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    onChange={changeName}
                    value={userName}
                    id="name"
                  />
                  <Label htmlFor="topic">TOPICS</Label>
                  <Select id="topic" onChange={changeSelect} value={topic}>
                    {topicsList.map(echValue => (
                      <option key={echValue.id} value={echValue.id}>
                        {echValue.displayText}
                      </option>
                    ))}
                  </Select>
                  <RegisterNow type="submit">Register Now</RegisterNow>
                  <ErrorMsg>{errorMsg}</ErrorMsg>
                </FormContainer>
              </Container>
            </BgColor>
          )
        }}
      </AllContext.Consumer>
    )
  }
}

export default Register

import {Link} from 'react-router-dom'

import {
  BgColor,
  Logo,
  Heading,
  Paragraph,
  RegisterBtn,
  ThumblineImage,
} from './styledComponents'

import AllContext from '../../context/AllContext'

const Home = () => (
  <AllContext.Consumer>
    {value => {
      const {userName, topic} = value
      const isTrue = userName.length !== 0
      console.log(isTrue)
      return (
        <BgColor>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <Heading isTrue={isTrue}>
            {isTrue ? `Hello ${userName}` : 'Welcome to Meetup'}
          </Heading>
          <Paragraph isTrue={isTrue}>
            {isTrue ? `Welcome to ${topic}` : 'Please register for the topic'}
          </Paragraph>
          {isTrue === false ? (
            <Link to="/register">
              <RegisterBtn>Register</RegisterBtn>
            </Link>
          ) : null}
          <ThumblineImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </BgColor>
      )
    }}
  </AllContext.Consumer>
)

export default Home

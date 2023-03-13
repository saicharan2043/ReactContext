import styled from 'styled-components'

export const BgColor = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const Logo = styled.img`
  height: 60px;
  margin-bottom: 120px;
  align-self: flex-start;
`

export const Heading = styled.h1`
  font-family: Roboto;
  font-size: ${props => (props.isTrue === true ? '80px' : '50px')};
  color: ${props => (props.isTrue === true ? '#2563eb' : '#334155')};
  align-self: center;
  margin-bottom: ${props => (props.isTrue === 'true' ? '0px' : '15px')};
`

export const Paragraph = styled.p`
  font-family: Roboto;
  font-size: ${props => (props.isTrue === true ? '50px' : '25px')};
  color: #334155;
  align-self: center;
  margin-bottom: 30px;
  margin-top: ${props => (props.isTrue === true ? '10px' : '10px')};
  font-weight: ${props => (props.isTrue === true ? 'bold' : 'none')};
`

export const RegisterBtn = styled.button`
  width: 120px;
  height: 40px;
  background-color: #3b82f6;
  border-radius: 8px;
  font-size: 15px;
  font-family: Roboto;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  align-self: center;
  border-width: 0px;
  margin-bottom: 30px;
  text-decoration: unset;
`

export const ThumblineImage = styled.img`
  height: 350px;
  align-self: center;
  margin-bottom: 40px;
`

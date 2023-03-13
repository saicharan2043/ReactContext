import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
`

export const LoginImg = styled.img`
  height: 400px;
  margin-right: 30px;
  align-self: center;
`

export const FormContainer = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-self: center;
`

export const HeadingForm = styled.h1`
  font-family: Roboto;
  font-size: 45px;
  color: #334155;
  margin-bottom: 25px;
`

export const Label = styled.label`
  font-family: Roboto;
  font-size: 15px;
  color: #475569;
  font-weight: bold;
`

export const Input = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid #7b8794;
  border-radius: 8px;
  padding: 8px;
  padding-left: 12px;
  font-family: Roboto;
  font-size: 15px;
  color: #475569;
  margin-bottom: 35px;
  outline: none;
  background-color: transparent;
  margin-top: 10px;
`

export const Select = styled.select`
  width: 300px;
  height: 50px;
  border: 1px solid #7b8794;
  border-radius: 8px;
  padding: 8px;
  padding-left: 12px;
  font-family: Roboto;
  font-size: 15px;
  color: #334155;
  margin-bottom: 35px;
  outline: none;
  margin-top: 10px;
`

export const RegisterNow = styled.button`
  width: 150px;
  height: 45px;
  background-color: #3b82f6;
  border-radius: 8px;
  font-size: 15px;
  font-family: Roboto;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  align-self: flex-start;
  border-width: 0px;
  margin-bottom: 5px;
`

export const ErrorMsg = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: #ff0b37;
`

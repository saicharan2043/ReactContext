import React from 'react'

const AllContext = React.createContext({
  userName: '',
  topic: '',
  errorMsg: '',
  topicsList: [],
  RegisterNowClick: () => {},
  clickInput: () => {},
  clickSelect: () => {},
})

export default AllContext

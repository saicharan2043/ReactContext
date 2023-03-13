import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import Register from './components/Register'

import AllContext from './context/AllContext'

import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {userName: '', topic: topicsList[0].displayText, errorMsg: ''}

  RegisterNowClick = () => {
    const {userName, topic} = this.state

    if (userName.length === 0) {
      this.setState({errorMsg: 'Please enter your name'})
    } else {
      this.setState({errorMsg: ''})
    }
  }

  clickInput = text => {
    this.setState({userName: text})
  }

  clickSelect = value => {
    this.setState({topic: value})
  }

  render() {
    const {userName, topic, errorMsg} = this.state
    console.log(topic)
    return (
      <AllContext.Provider
        value={{
          userName,
          topic,
          errorMsg,
          topicsList,
          RegisterNowClick: this.RegisterNowClick,
          clickInput: this.clickInput,
          clickSelect: this.clickSelect,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </AllContext.Provider>
    )
  }
}

export default App

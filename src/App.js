import React, { Component } from 'react'
import './App.css';
import MainHeader from './components/MainHeader'
import Particles from 'react-particles-js';
import {particlesOptions} from './const'
import Body from './components/Body'


class App extends Component {

  render() {
    return (
      <div>
        <Particles className='particles' params={particlesOptions}/>
        <MainHeader />
        <Body />
      </div>
    )
  }
}


export default App
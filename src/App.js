import React, { Component } from 'react'
import './App.css';
import MainHeader from './components/MainHeader'
import Particles from 'react-particles-js';
import {particlesOptions} from './const'
import Body from './components/Body'
import Footer from './components/Footer'




class App extends Component {

  render() {
    return (
      <div className="example">
        <Particles className='particles' params={particlesOptions}/>
        <MainHeader />
        <Body />
        <Footer />
      </div>
    )
  }
}


export default App

// Body Section should animate into view
// footer after body section covers 60 percentage of the page
import React, { Component } from 'react'
import './App.css';
import MainHeader from './components/MainHeader'
import Particles from 'react-particles-js';
import {particlesOptions} from './const'
import Body from './components/Body'
import Footer from './components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax';




class App extends Component {

  render() {
    return (
      <div className="example">
        <Particles className='particles' params={particlesOptions}/>
        <ParallaxProvider>
          <MainHeader/>
        </ParallaxProvider>

        <Body />
        <Footer />
      </div>
    )
  }
}


export default App

// Remove Blinking Cursor on smaller screens.
// Add form on Body
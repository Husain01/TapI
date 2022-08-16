import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Footer, Hero, Lite, Options, Pro, Reviews, Video} from './containers';
import {CTA, Card, Navbar, Review} from './components';

function App() {
  

  return (
    <div className="App">
      <div className="wrapper">
      <Hero/>
      <Options/>
      <Video/>
      <Lite/>
      <Pro/>
      <Reviews/>
      <Footer/>
      </div>
    </div>
  )
}

export default App

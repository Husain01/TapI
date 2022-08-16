import './App.css'
import {Footer, Hero, Lite, Options, Pro, Reviews, Video} from './containers';

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

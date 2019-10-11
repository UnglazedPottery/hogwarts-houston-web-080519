import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsBrowser from './HogsBrowser';
import HogSpecificCard from './HogSpecificCard'

class App extends Component {
  state = {
    currentHog: ""

  }

  setHog = (hog) => {
    this.setState({
      currentHog: hog
    })
  } 

  resetState= (hog) => {
    this.setState({
      currentHog: ""
    })
  } 

  render() {
    

    console.log(this.state.currentHog)
    let hogComponent = null
    if (this.state.currentHog === ""){
      hogComponent = <HogsBrowser  setHog={this.setHog} currentHog={this.state.currentHog}/>

    }else{
      hogComponent = <HogSpecificCard CurrentHog={this.state.currentHog} resetState={this.resetState}/>
  }
    return (
      <div className="App">
          < Nav />
          {hogComponent}
      </div>
    )
  }
}

export default App;

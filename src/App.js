import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Form from './Components/Form/Form';
import Logo from './Components/Logo/Logo';
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';
const particlesOptions={
                particles: {
                  number:{
                    value:30,
                    density:{
                      enable:true,
                      value_area:800
                    }
                  }
                }
              }

class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles 
              className='particles'
              params={particlesOptions}
      />
       <Navigation />
       <Logo />
       <Form />
      </div>
    );
  }
}

export default App;

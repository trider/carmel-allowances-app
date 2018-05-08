import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/Home'

class App extends Component {
  render() { 
    return (
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    )
  }
}

export default App;

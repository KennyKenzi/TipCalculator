import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainBody from './components/MainBody'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainBody/>
      </div>
    </div>
  );
}

export default App;

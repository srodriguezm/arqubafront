import React from 'react';
import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import Vista from './components/Structure'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Vista/>
      </BrowserRouter>
    </div>
  );
}

export default App;

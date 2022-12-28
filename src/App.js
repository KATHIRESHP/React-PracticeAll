import React, {Component} from 'react';
import './App.css';
import UseRef from './components/Hooks/UseRef';

class App extends Component
{
  render()
  {
    return (
      <div className="App">
        <UseRef/>
      </div>
    );
  }
}

export default App;
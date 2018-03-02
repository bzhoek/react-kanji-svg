import React, {Component} from 'react';
import Kanji from './components/Kanji'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Kanji size={180}/>
      </div>
    );
  }
}

export default App;

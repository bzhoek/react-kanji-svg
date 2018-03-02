import React, {Component} from 'react';
import Kanji from './components/Kanji'
import './App.css';
import json from './kanji-svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Kanji grid={4} size={180} svg={json[3].svg}/>
      </div>
    );
  }
}

export default App;

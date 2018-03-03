import React, {Component} from 'react';
import Kanji from './components/Kanji'
import Meanings from './components/Meanings'
import './App.css';
import json from './kanji-svg'

// const svg = json.filter(c => c.unicode ==='9022')
const svg = json.filter(c => c.literal === '風')
let kanji = svg[0]
console.log(kanji)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Kanji grid={9} size={180} svg={kanji.svg}/>
        <Meanings literal={kanji.literal} meanings={kanji.meanings}/>
      </div>
    );
  }
}

export default App;

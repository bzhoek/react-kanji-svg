import React, {Component} from 'react';
import Kanji from './components/Kanji'
import Meanings from './components/Meanings'
import './App.css';
import json from './kanji-svg'

class App extends Component {

  constructor() {
    super()
    this.state = {
      kanji: this.find('験')
    }
  }

  find(literal) {
    return json.filter(c => c.literal === literal).shift()
  }

  onChange() {
    let kanji = this.find(this.textInput.value)
    if (kanji) {
      this.setState({
        kanji: kanji
      })
    }
  }

  render() {
    return (
      <div className="App">
        <input type="text" ref={input => this.textInput = input} onChange={this.onChange.bind(this)}/>
        <Kanji grid={9} size={180} svg={this.state.kanji.svg}/>
        <p>N{this.state.kanji.jlpt}, {this.state.kanji.freq}</p>
        <Meanings literal={this.state.kanji.literal} meanings={this.state.kanji.meanings}/>
      </div>
    );
  }
}

export default App;

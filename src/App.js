import React, {Component} from 'react';
import Kanji from './components/Kanji'
import Meanings from './components/Meanings'
import './App.css';
import json from './kanji-svg'
import RandomizedLookup from './RandomizedLookup'

class App extends Component {

  constructor() {
    super()
    this.lookup = new RandomizedLookup()
    let today = new Date()
    let freq = this.lookup.forDay(today)

    this.state = {
      date: today,
      kanji: this.freq(freq) || this.find('火')
    }
  }

  onChange() {
    let kanji = this.find(this.textInput.value)
    if (kanji) {
      this.setState({
        kanji: kanji
      })
    }
  }

  freq(n) {
    let kanji = json.filter(c => c.freq === n.toString())
    if (kanji.length) {
      return kanji.shift()
    }
  }

  find(text) {
    let kanji = this.filterLiteral(text)
    if (kanji.length) {
      return kanji.shift()
    } else {
      let kanji = this.filterMeaning(text)
      if (kanji.length) {
        return kanji.shift()
      }
    }
  }

  filterLiteral(literal) {
    return json.filter(c => c.literal === literal)
  }

  filterMeaning(text) {
    return json.filter(c => c.meanings.some(m => m.toLowerCase() === text))
  }

  onPrevious() {
    this.changeDate(-1)
  }

  onNext() {
    this.changeDate(+1)
  }

  changeDate(delta) {
    let other = this.state.date
    other.setDate(other.getDate() + delta)
    let freq = this.lookup.forDay(other)
    let kanji = this.freq(freq)
    if(kanji) {
      this.setState({
        date: other,
        kanji: kanji
      })
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onPrevious.bind(this)}>
          Previous
        </button>
        <span>{this.state.date.toLocaleDateString()}</span>
        <button onClick={this.onNext.bind(this)}>
          Next
        </button>
        <input type="text" ref={input => this.textInput = input} onChange={this.onChange.bind(this)}/>
        <Kanji grid={9} size={180} svg={this.state.kanji.svg}/>
        <p>N{this.state.kanji.jlpt}, {this.state.kanji.freq}</p>
        <Meanings literal={this.state.kanji.literal} meanings={this.state.kanji.meanings}/>
      </div>
    );
  }
}

export default App;

import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './Kanji.css'

class Kanji extends PureComponent {

  constructor(props) {
    super(props)

    this.listeners = []
  }

  animatePathAt(elements, index) {
    if (index < elements.length) {
      let element = elements[index]
      const length = element.getTotalLength()
      element.style = `stroke-dasharray: ${length};stroke-dashoffset: ${length}; animation: dash ${length / 40}s linear forwards;`
      if (this.listeners.indexOf(element) === -1) {
        this.listeners.push(element)
        element.addEventListener('animationend', () => {
          let next = index + 1
          if (next < elements.length) {
            this.animatePathAt(elements, index + 1)
          } else {
            setTimeout(function () {
              this.animateDrawing();
            }.bind(this), 1000);
          }
        })
      }
      element.classList.add('draw')
    }
  }

  animateDrawing() {
    let paths = document.body.querySelectorAll('path')
    paths.forEach((element) => element.classList.remove('draw'))
    this.animatePathAt(paths, 0)
  }

  componentDidMount() {
    this.animateDrawing()
  }

  // TODO: remove listeners on unmount

  componentDidUpdate() {
    this.animateDrawing()
  }

  render() {
    const {grid, size, svg} = this.props
    const slices = Math.sqrt(grid)

    const renderRecipe = (index) => {
      let number = (index + 1) * 90 / slices
      return <g key={number}>
        <line x1={number} y1="0" x2={number} y2="90"/>
        <line x1="0" y1={number} x2="90" y2={number}/>
      </g>
    }

    return (
      <div id="kanji">
        <object className="grid">
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 90 90">
            {Array.from(Array(slices - 1).keys()).map(renderRecipe)}
          </svg>
        </object>
        <object className="strokes" dangerouslySetInnerHTML={{"__html": svg}}>
        </object>
      </div>
    )
  }
}

Kanji.propTypes = {
  grid: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  svg: PropTypes.string.isRequired,
}

export default Kanji
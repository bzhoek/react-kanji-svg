import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './Kanji.css'

class Kanji extends PureComponent {

  animate(elements, index) {
    if (index < elements.length) {
      let element = elements[index]
      const length = element.getTotalLength()
      element.style = `stroke-dasharray: ${length};stroke-dashoffset: ${length}; animation: dash ${length/40}s linear forwards;`
      element.addEventListener('animationend', () => {
        this.animate(elements, index + 1)
      })
      element.classList.add('draw')
    }
  }

  componentDidMount() {
    this.animate(document.body.querySelectorAll('path'), 0)
  }

  render() {
    const {grid, size} = this.props
    const slices = Math.sqrt(grid)

    const renderRecipe = (index) => {
      let number = (index + 1) * 90 / slices
      return <g key={number}>
        <line x1={number} y1="0" x2={number} y2="90"/>
        <line x1="0" y1={number} x2="90" y2={number}/>
      </g>
    }

    return (
      <div>
        <object id="grid">
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 90 90">
            {Array.from(Array(slices - 1).keys()).map(renderRecipe)}
          </svg>
        </object>
        <object id="kanji">
          <svg width="109" height="109" viewBox="0 0 109 109">
            <g id="kvg:StrokePaths_09a13">
              <g id="kvg:09a13">
                <g id="kvg:09a13-g1">
                  <path id="kvg:09a13-s1"
                        d="M16.49,17.62c0.76,0.76,1.25,1.82,1.24,3.38c-0.02,7.37-0.07,24.26-0.17,34.5c-0.02,2.35,0.07,3.75-0.56,5.75"/>
                  <path id="kvg:09a13-s2" d="M18.02,19.51c7.48-1.26,17.66-2.93,22.01-3.17c1.59-0.09,2.96-0.21,4-0.03"/>
                  <path id="kvg:09a13-s3" d="M28.81,20.57c1,1,1.45,2.18,1.45,3.49c0,6.17-0.06,24.21-0.25,33.91"/>
                  <path id="kvg:09a13-s4" d="M18.16,33.34c6.26-0.58,16.75-2.85,19.44-3.24c0.94-0.14,2.53-0.24,3-0.02"/>
                  <path id="kvg:09a13-s5" d="M18.26,45.62c6.26-0.59,15.75-2.35,18.44-2.74c0.94-0.14,2.53-0.25,3-0.03"/>
                  <path id="kvg:09a13-s6"
                        d="M17.74,60.65c6.17-1.41,18.79-4.07,22.18-4.63c3.08-0.51,4.58,1.49,4.2,6.45C43.33,72.8,41.55,84.12,38.75,91c-2.43,5.96-5,2.12-6.71-0.86"/>
                  <g id="kvg:09a13-g2">
                    <path id="kvg:09a13-s7" d="M10.54,74.75c0.37,6.29-0.75,11.82-1.14,13.07"/>
                    <path id="kvg:09a13-s8" d="M16.62,71.25c1.38,2.54,2.5,6.88,2.88,10.25"/>
                    <path id="kvg:09a13-s9" d="M23.8,68.47c1.45,2.28,2.82,5.53,3.33,8.03"/>
                    <path id="kvg:09a13-s10" d="M30.5,64.5c1.75,1.75,4.36,4.24,4.96,7"/>
                  </g>
                </g>
                <g id="kvg:09a13-g3">
                  <g id="kvg:09a13-g4">
                    <path id="kvg:09a13-s11"
                          d="M66.48,11.5c0.06,0.71,0.27,1.89-0.11,2.87c-2.69,6.92-9.61,18.97-20.22,27.5"/>
                    <path id="kvg:09a13-s12"
                          d="M66.9,14.12c2.71,4.05,15.43,16.09,20.95,21.39c1.79,1.73,3.39,3.23,5.77,3.86"/>
                  </g>
                  <g id="kvg:09a13-g5">
                    <g id="kvg:09a13-g6">
                      <path id="kvg:09a13-s13"
                            d="M56.48,40.4c1.52,0.23,2.76,0.31,3.79,0.12c5.48-1.01,10.48-1.76,15.14-2.2c1.18-0.11,3.34-0.18,4.63,0.01"/>
                    </g>
                    <g id="kvg:09a13-g7">
                      <path id="kvg:09a13-s14"
                            d="M50.39,52.87c0.78,0.6,1.24,1.38,1.37,2.35c0.95,3.27,1.88,9.24,2.62,14.27c0.18,1.23,0.36,2.41,0.52,3.48"/>
                      <path id="kvg:09a13-s15"
                            d="M52.77,54.03c10.35-1.28,26.78-2.78,31.61-3.26c1.77-0.17,2.83,1.76,2.57,2.79c-1.05,4.26-1.71,5.44-3.48,13.57"/>
                      <path id="kvg:09a13-s16"
                            d="M55.28,69.97c4.64-0.44,17.59-1.68,26.08-2.41c1.89-0.16,3.56-0.3,4.87-0.4"/>
                    </g>
                    <g id="kvg:09a13-g8">
                      <path id="kvg:09a13-s17"
                            d="M66.72,42.5c0.9,1.25,1.35,2.83,1.37,4.63c0.41,26.49-4.84,39.12-23.95,49.62"/>
                      <path id="kvg:09a13-s18"
                            d="M68.15,69.87c2.67,4.03,15.45,15.9,21.14,21.32c1.88,1.79,3.43,3.34,5.96,4.06"/>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="kvg:StrokeNumbers_09a13">
              <text transform="matrix(1 0 0 1 10.99 28.63)">1</text>
              <text transform="matrix(1 0 0 1 17.50 16.50)">2</text>
              <text transform="matrix(1 0 0 1 33.50 25.50)">3</text>
              <text transform="matrix(1 0 0 1 21.49 29.91)">4</text>
              <text transform="matrix(1 0 0 1 21.50 42.50)">5</text>
              <text transform="matrix(1 0 0 1 21.50 56.76)">6</text>
              <text transform="matrix(1 0 0 1 6.49 73.50)">7</text>
              <text transform="matrix(1 0 0 1 12.50 72.50)">8</text>
              <text transform="matrix(1 0 0 1 18.50 70.50)">9</text>
              <text transform="matrix(1 0 0 1 23.44 66.50)">10</text>
              <text transform="matrix(1 0 0 1 56.50 13.50)">11</text>
              <text transform="matrix(1 0 0 1 74.50 19.50)">12</text>
              <text transform="matrix(1 0 0 1 58.50 37.50)">13</text>
              <text transform="matrix(1 0 0 1 45.50 67.50)">14</text>
              <text transform="matrix(1 0 0 1 50.50 50.08)">15</text>
              <text transform="matrix(1 0 0 1 56.44 66.50)">16</text>
              <text transform="matrix(1 0 0 1 70.50 47.50)">17</text>
              <text transform="matrix(1 0 0 1 78.50 78.35)">18</text>
            </g>
          </svg>
        </object>
      </div>
    )
  }
}

Kanji.propTypes = {
  grid: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
}

export default Kanji
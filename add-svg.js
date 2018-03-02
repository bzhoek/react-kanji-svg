import fs from 'fs'

let obj = JSON.parse(fs.readFileSync('kanjidic2.json', 'utf-8'))
let add = obj.map((c) => {
  try {
    let svg = fs.readFileSync(`svg/0${c.unicode}.svg`, 'utf-8')
    return Object.assign({}, c, {svg: svg})
  } catch (err) {
    console.log(err)
    return c
  }
})
fs.writeFileSync('src/kanji-svg.json', JSON.stringify(add))

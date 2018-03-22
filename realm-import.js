import fs from 'fs'
import realm from './src/kanjis'

console.log(new Date())
// Realm.open({schema: [Kanji]}).then(realm => {

realm.write(() => {
  realm.deleteAll()
  let kanjis = JSON.parse(fs.readFileSync('kanjidic2.json', 'utf-8'))
  kanjis.forEach((kanji, index) => {
    if (index % 1000 === 0) console.log(index)

    let file = `svg/0${kanji.unicode}.svg`
    var svg = ''
    try {
      svg = fs.readFileSync(file, 'utf-8')
    } catch (err) {
      console.log(`${file} is missing.`)
    }

    realm.create('Kanji', {
      unicode: kanji.unicode,
      frequency: parseInt(kanji.freq) || 0,
      literal: kanji.literal,
      meaning: kanji.meanings.join(' '),
      drawing: svg
    })
  })
})

Promise.all([realm]).then(() => {
  realm.close()
  console.log(new Date())
})

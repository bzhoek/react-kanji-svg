import fs from 'fs'
import sqlite from 'sqlite3'

var db = new sqlite.Database('kanji.sqlite');

db.serialize(function () {
  db.run("CREATE TABLE Kanji (unicode TEXT PRIMARY KEY, frequency INTEGER, literal TEXT, meaning TEXT, drawing TEXT)");

  let kanjis = JSON.parse(fs.readFileSync('kanjidic2.json', 'utf-8'))
  kanjis.forEach((kanji, index) => {
    if (index % 1000 === 0) console.log(index)

    let file = `svg/0${kanji.unicode}.svg`
    try {
      let svg = fs.readFileSync(file, 'utf-8')
      db.run("INSERT INTO Kanji VALUES (?, ?, ?, ? ,?)", kanji.unicode, parseInt(kanji.freq), kanji.literal, kanji.meanings.join(', '), svg)
    } catch (err) {
      console.log(`${file} is missing.`)
    }

  })

  // var stmt = db.prepare("INSERT INTO Kanji VALUES (?, ?, ?, ? ,?)");
  // for (var i = 0; i < 10; i++) {
  //   stmt.run("Ipsum " + i, i, "literal", "meaning", "drawing");
  // }
  // stmt.finalize();

  db.each("SELECT rowid AS id, * FROM Kanji", function (err, row) {
    console.log(row.id + ": " + row.unicode + ", " + row.literal);
  });
});

db.close();
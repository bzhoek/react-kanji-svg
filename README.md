# Getting Started

`yarn clean` - generate clean SVG files from https://github.com/KanjiVG/kanjivg

    for f in ~/github/kanjivg/kanji/?????.svg; do xsltproc -v -nonet kanjisvg.xslt $f > "svg/`basename $f`"; done

`yarn transform` - transform http://www.edrdg.org/kanjidic/kanjd2index.html to JSON

    $ xsltproc kanjidic2.xslt kanjidic2.xml > kanjidic2.json

`yarn merge` - add SVG content to kanjidic2.json with

    $ npx babel add-svg.js --presets=es2015 --out-file dist/add-svg.js; node dist/add-svg.js

https://www.bjelic.net/2012/08/01/coding/convert-xml-to-json-using-xslt/

## Frequency

[Japanese Wikipedia frequency thread](https://forum.koohii.com/thread-3216.html) and [results](https://docs.google.com/spreadsheets/d/1LRRK09PsneshnqP8-mvwvFjYGr2EsSWK_69RYwIFEzo/edit#gid=0).  

[Kyōiku kanji](https://en.wikipedia.org/wiki/Ky%C5%8Diku_kanji) are the first 1,006 kanji taught in primary school. These are from the Jōyō [list](https://en.wikipedia.org/wiki/J%C5%8Dy%C5%8D_kanji) created by the Japanese Ministery of Education.

Excluding [names](https://www.reddit.com/r/LearnJapanese/comments/2s55tz/3002_most_used_kanji_makes_up_95_of_whats_in/cnmcasw/) 50% [comprehension](http://web.archive.org/web/20080919234047/http://nozaki-lab.ics.aichi-edu.ac.jp/nozaki/asahi/kanji.html).

## Navigation

https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
https://github.com/ddewaele/react-simple-master-detail

## Testing

https://medium.freecodecamp.org/the-right-way-to-test-react-components-548a4736ab22

## ES6 from command-line

    $ yarn add -D babel-cli babel-core babel-preset-es2015
    $ npx babel convert-to-json.js --presets=es2015 --out-file converter.js

## Animation

https://css-tricks.com/svg-line-animation-works/

## Clean SVG

    xsltproc -v -nonet kanjisvg.xslt src/09a13.svg > src/09a13-clean.svg
    for f in ?????.svg; do echo "$f"; done

## SQLite

    $ yarn babel
    $ time node dist/sqlite-import.js

## Kleuren

    $ xsltproc -v -nonet kanjistyle.xslt kanji.svg > sample.svg; mogrify -format png sample.svg; open sample.png

E8ECFB
D9CCE3
CAACCB
BA8DB4
AA6F9E
994F88
882E72
1965B0
437DBF
6195CF
7BAFDE
4EB265
90C987
CAE0AB
F7F056
F7CB45
F4A736
EE8026
E65518
DC050C
A5170E
72190E
42150A

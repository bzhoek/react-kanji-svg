# Getting Started

`yarn clean` - generate clean SVG files from https://github.com/KanjiVG/kanjivg 

    for f in ~/github/kanjivg/kanji/?????.svg; do xsltproc -v -nonet kanjisvg.xslt $f > "svg/`basename $f`"; done

`yarn transform` - transform http://www.edrdg.org/kanjidic/kanjd2index.html to JSON

    $ xsltproc kanjidic2.xslt kanjidic2.xml > kanjidic2.json
    
`yarn merge` - add SVG content to kanjidic2.json with

    $ npx babel add-svg.js --presets=es2015 --out-file dist/add-svg.js; node dist/add-svg.js

https://www.bjelic.net/2012/08/01/coding/convert-xml-to-json-using-xslt/

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

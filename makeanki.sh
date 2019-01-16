#!/usr/bin/env bash

UNICODE=$(sqlite3 kanji.sqlite "select unicode from Kanji where literal='$1'")
MEANING=$(sqlite3 kanji.sqlite "select meaning from Kanji where literal='$1'")
ONYOMI=$(sqlite3 kanjidic.sqlite "select onyomi from Kanji where kanji='$1'")

SVG='anki.kanji.svg'
STYLED='anki.styled.svg'
sqlite3 kanji.sqlite "select drawing from Kanji where literal='$1'" > $SVG
xsltproc -nonet kanjistyle.xslt $SVG > $STYLED
convert -size 1024x1024 $STYLED anki.styled.png

cat > anki.media.json <<- EOM
{
  "action": "storeMediaFile",
  "version": 6,
  "params": {
    "filename": "${UNICODE}.png",
    "data": "$(base64 anki.styled.png)"
  }
}
EOM

curl localhost:8765 -X POST --data @anki.media.json

cat > anki.strokes.json <<- EOM
{
  "action": "updateNoteFields",
  "version": 6,
  "params": {
    "note": {
      "id": ${NOTEID},
      "fields": {
        "strokes": "<img src=\"${UNICODE}.png\" />"
      }
    }
  }
}
EOM

cat > anki.add.json <<- EOM
{
  "action": "addNote",
  "version": 6,
  "params": {
    "note": {
      "deckName": "Japans::Kanji",
      "modelName": "OnKanji",
      "fields": {
        "nederlands": "${MEANING}",
        "kanji": "${1}",
        "on": "${ONYOMI}",
        "notes": "",
        "strokes": "<img src=\"${UNICODE}.png\" />"
      },
      "options": {
        "allowDuplicate": false
      },
      "tags": []
    }
  }
}
EOM

curl localhost:8765 -X POST --data @anki.add.json
# {"result": 1545055762607, "error": null}%

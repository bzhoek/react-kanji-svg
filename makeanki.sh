#!/usr/bin/env bash

if [ "$#" -lt 1 ]; then
  echo "<kanji 離> [find|update <noteid>"
  exit 1
fi

STAMP=$(date +%s)
UNICODE=$(sqlite3 kanji.sqlite "select unicode from Kanji where literal='$1'")
MEANING=$(sqlite3 kanji.sqlite "select meaning from Kanji where literal='$1'")
ONYOMI=$(sqlite3 kanjidic.sqlite "select onyomi from Kanji where kanji='$1'")
KUNYOMI=$(sqlite3 kanjidic.sqlite "select kunyomi from Kanji where kanji='$1'")

SVG='anki.kanji.svg'
STYLED='anki.styled.svg'
sqlite3 kanji.sqlite "select drawing from Kanji where literal='$1'" > $SVG
xsltproc -nonet anki.styled.xslt $SVG > $STYLED
convert -size 1024x1024 $STYLED anki.styled.png

function storeMediaFile {
  cat > anki.media.json <<- EOM
  {
    "action": "storeMediaFile",
    "version": 6,
    "params": {
      "filename": "${UNICODE}-${STAMP}.png",
      "data": "$(base64 anki.styled.png)"
    }
  }
EOM
  curl localhost:8765 -X POST --data @anki.media.json
}

case "$2" in
  replace)
    cat > anki.media.json <<- EOM
    {
      "action": "findNotes",
      "version": 6,
      "params": {
        "query": "deck:Japans::Kanji ${1}"
      }
    }
EOM
    NOTEID=$(curl localhost:8765 -X POST --data @anki.media.json | sed 's/.*\[\(.*\)\].*/\1/g')
    echo $NOTEID
    storeMediaFile
    cat > anki.strokes.json <<- EOM
    {
      "action": "updateNoteFields",
      "version": 6,
      "params": {
        "note": {
          "id": ${NOTEID},
          "fields": {
            "strokes": "<img src=\"${UNICODE}-${STAMP}.png\" />"
          }
        }
      }
    }
EOM
    curl localhost:8765 -X POST --data @anki.strokes.json
    ;;
  find)
    cat > anki.media.json <<- EOM
    {
      "action": "findNotes",
      "version": 6,
      "params": {
        "query": "deck:Japans::Kanji ${1}"
      }
    }
EOM
    NOTEID=$(curl localhost:8765 -X POST --data @anki.media.json | sed 's/.*\[\(.*\)\].*/\1/g')
#    curl localhost:8765 -X POST --data @anki.media.json
    echo $NOTEID
    ;;
  update)
    storeMediaFile
    NOTEID=$3
    cat > anki.strokes.json <<- EOM
    {
      "action": "updateNoteFields",
      "version": 6,
      "params": {
        "note": {
          "id": ${NOTEID},
          "fields": {
            "strokes": "<img src=\"${UNICODE}-${STAMP}.png\" />"
          }
        }
      }
    }
EOM
    curl localhost:8765 -X POST --data @anki.strokes.json
    ;;
  *)
    storeMediaFile
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
            "strokes": "<img src=\"${UNICODE}-${STAMP}.png\" />"
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
esac

# {"result": 1545055762607, "error": null}%

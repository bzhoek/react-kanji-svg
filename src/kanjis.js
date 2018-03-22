import Realm from 'realm'

class Kanji {
}

Kanji.schema = {
  name: 'Kanji',
  primaryKey: 'unicode',
  properties: {
    unicode: {type: 'string', indexed: true},
    frequency: {type: 'int', indexed: true},
    literal: 'string',
    meaning: 'string',
    drawing: 'string',
  },
};

export default new Realm({schema: [Kanji]})
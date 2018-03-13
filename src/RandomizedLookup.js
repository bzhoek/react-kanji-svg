import seedrandom from 'seedrandom'

export default class RandomizedLookup {
  constructor(count = 555) {
    this.entries = {}
    const rng = seedrandom('毎日漢字')

    for (let i = 0; i < count + 1; i++) {
      let r = Math.floor(count * rng())
      while (this.entries[r]) {
        r = Math.floor(count * rng())
      }
      this.entries[r] = i
    }
  }
}
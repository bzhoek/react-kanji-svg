import seedrandom from 'seedrandom'

const ONE_DAY = 1000 * 60 * 60 * 24
export default class RandomizedLookup {
  date = new Date(2018, 0, 28)

  constructor(count = 555) {
    this.count = count
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

  forDay(date = new Date()) {
    return Math.round(date.getTime() / ONE_DAY) % this.count
  }
}
import seedrandom from 'seedrandom'

describe('random numbers', () => {
  const count = 555

  it('is deterministic', () => {
    const rng = seedrandom('毎日漢字')
    for (let i = 0; i < 42; i++) {
      rng()
    }
    expect(rng()).toBe(0.3403493326408344)
  })

  it('is deterministic', () => {
    const entries = {}
    const rng = seedrandom('毎日漢字')
    for (let i = 0; i < count + 1; i++) {
      let r = Math.floor(count * rng())
      while (entries[r]) {
        r = Math.floor(count * rng())
      }
      entries[r] = i
    }
    // console.log(entries)
    expect(Object.keys(entries).length).toBe(count)
  })

  it('cycles', () => {
    const ONE_DAY = 1000 * 60 * 60 * 24
    const date = new Date(2018, 0, 28)
    expect(Math.round(date.getTime() / ONE_DAY) % count).toBe(354)
  })
})

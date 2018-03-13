import RandomizedLookup from './RandomizedLookup'

describe('random numbers', () => {
  const count = 111
  let subject

  beforeEach(() => {
    subject = new RandomizedLookup(count)
  })

  it('is deterministic', () => {
    expect(subject.entries[0]).toBe(12)
  })

  it('is complete', () => {
    expect(Object.keys(subject.entries).length).toBe(count)
  })

  it('cycles', () => {
    const ONE_DAY = 1000 * 60 * 60 * 24
    const date = new Date(2018, 0, 28)
    expect(Math.round(date.getTime() / ONE_DAY) % count).toBe(21)
  })
})

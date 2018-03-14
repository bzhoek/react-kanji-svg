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
    expect(subject.forDay(new Date(2018, 0, 28))).toBe(21)
  })
})

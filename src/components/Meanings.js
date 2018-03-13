import React from 'react'

const Meanings = ({literal, meanings}) => {
  const renderMeaning = (meaning) => {
    return <dd key={meaning}>{meaning}</dd>
  }

  return (
    <dl>
      <dt>{literal}</dt>
      {meanings.map(renderMeaning)}
    </dl>
  )
}

export default Meanings
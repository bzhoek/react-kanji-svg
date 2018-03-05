import React from 'react'

const Meanings = ({literal, meanings}) => {
  const renderMeaning = (meaning) => {
    return <dd>{meaning}</dd>
  }

  return (
    <dl>
      <dt>{literal}</dt>
      {meanings.map(renderMeaning)}
    </dl>
  )
}

export default Meanings
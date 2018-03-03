import React from 'react'

const Meanings = ({literal, meanings}) => {
  const renderMeaning = (meaning) => {
    return <dt>{meaning}</dt>
  }

  return (
    <dl>
      {meanings.map(renderMeaning)}
    </dl>
  )
}

export default Meanings
import React from 'react'

import style from './card.module.css'

function Card({popularity, title}) {
  return (
    <div className={style.card}>
      <div><span>{popularity}</span></div>
      <div><span>{title}</span></div>
    </div>
  )
}

export default Card
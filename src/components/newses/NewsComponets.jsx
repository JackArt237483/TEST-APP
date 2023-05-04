import React from 'react'
import classes from "./news.module.css";

function NewsComponets({title,descrip,number}) {
  return (
    <div className={classes.block_news}>
        <h2>{title}</h2>
        <p>{descrip}</p>
        <span>{number}</span>
    </div>
  )
}

export default NewsComponets

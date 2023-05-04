import React from 'react'
import classes from "./news.module.css";
import NewsComponets from '../../components/newses/NewsComponets';
import news from "..//..//assets/news.json"


function News() {
  return (
    <div className={classes.news_info}>
       <h1>Новости</h1>
       <div className={classes.block_info}>
        {
          news.map((obj, index)=> (
            <NewsComponets key={index} 
            title={obj.title}
            descrip={obj.descrip}
            number={obj.number}/>
          ))
        }
       </div>
    </div>
  )
}

export default News

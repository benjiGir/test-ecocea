import React, { useCallback, useEffect, useState } from 'react'

import { getPopularMovies } from '../../services/movies.service';
import Card from '../Card/Card';
import  style  from './cardlist.module.css'

function CardList() {
  const [popularMovies, setPopularMovies] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await getPopularMovies()

    setPopularMovies(data)
    console.log(popularMovies);
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <div className={style.cardContainer}>
      {popularMovies.length > 0 && popularMovies.map(movie => <Card key={movie.id} popularity={movie.popularity} title={movie.title} />)}
    </div>
    )

}

export default CardList
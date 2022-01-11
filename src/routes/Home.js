import React from 'react'
import { useEffect, useState } from "react";
import Movie from '../components/Movie';
import './Home.scss'

export default function Home() {
  const [loading,setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async()=>{
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  console.log(movies)
  useEffect(()=>{
    getMovies();
  },[]);

  return (
    <div className='home'>
      <div className="title">
        <h1>SangFlix</h1>
      </div>
      {loading ? <h1>Loading...</h1>
      :<div className='grid'>
        {movies.map((movie)=>{
          return(
            <Movie 
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image} 
              title={movie.title} 
              summary={movie.synopsis}
              genres={movie.genres}
              year={movie.year}
            />
          )         
        })}
      </div>
      }
     
    </div>
  );
}

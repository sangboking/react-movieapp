import { func } from 'prop-types';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';

export default function Detail() {
  const [dMovie,setDmovie] = useState([]);
  const {id} = useParams()
  const getMovie = async()=>{
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
     ).json();
     setDmovie(json.data.movie)
  }
  useEffect(()=>{
     getMovie()
  },[])
  console.log(dMovie)
  return (
    <div>
      <h1>{dMovie.title}</h1>
      <img src={dMovie.medium_cover_image}/>
      <p>개봉년도 : {dMovie.year}</p>
      <p>장르 : {dMovie.genres}</p>
      <p>런닝타임 : {dMovie.runtime}분</p>
      <p>평점 : {dMovie.rating}점</p>
    </div>
  )
}

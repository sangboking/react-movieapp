import PropTypes from 'prop-types';
import React from 'react'
import {Link} from 'react-router-dom';
import './Movie.scss'
export default function Movie({coverImg,title,year,genres,id,summary}) {
  return (
    <div className='movie'>
      <img src={coverImg} alt={title}/>
      <div className="colum">
        <div className="title2">
          <Link className='h2' to={`/movie/${id}`} >{title}</Link>
        </div>
        <div className="year">
          <span>{year}</span>
        </div>
        <div className="genres">
          <span className='genre1'>{genres[0]}</span>
          <span>{genres[1]}</span>
        </div>
        <div className="summary">
          
        </div>
      </div>
    </div>
  )
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

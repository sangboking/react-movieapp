import PropTypes from 'prop-types';
import React from 'react'
import {Link} from 'react-router-dom';
export default function Movie({coverImg,title,summary,genres,id}) {
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {
          genres.map((g,i)=>{
            return(
              <li key={i}>{g}</li>
            )
            
          })
        }
      </ul>
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

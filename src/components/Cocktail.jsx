import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id,name,image,info ,glass}) => {
  console.log(id);
  return (
    <article  className='cocktail'>
      <div className="img-container">
        <Link to={`/singlecocktail/${id}`}> <img src={image} alt={name} /></Link>

      </div>
      <div className="cocktail-footer">
         <h3>{name}</h3>
         <h4>{glass}</h4>
         <p>{info}</p>
      </div>
    </article>
  )
}

export default Cocktail

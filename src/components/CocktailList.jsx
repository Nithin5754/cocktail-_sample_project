import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {isLoading,isCocktail}=useGlobalContext()
 
  if(isLoading){
    return <Loading/>
  }

  if(isCocktail.length<1){
    return <h1>no cocktail is available</h1>
  }
  return (
      <section className='section'>
        <h2 className="section-title">
            cocklist list components

        </h2>
        <div className="cocktails-center">
            {
              isCocktail.map((cocktail)=><Cocktail key={cocktail.id} {...cocktail}/>)
            }
        </div>
      </section>
  )
}

export default CocktailList

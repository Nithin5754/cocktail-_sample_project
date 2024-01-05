import React from 'react'
import {SearchForm,CocktailList,Loading} from '../components/index'
import { useGlobalContext } from '../context';

const Home = () => {
 

  
  return (
    <div>
    <SearchForm/>
     <CocktailList/>
 </div>
  )
}

export default Home

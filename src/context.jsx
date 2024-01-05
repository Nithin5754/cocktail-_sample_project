import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url= 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

const [isLoading,setLoading]=useState(false)
const [isSearchTeam,setSearchTerm]=useState('a');
console.log(isSearchTeam);
const [isCocktail,setCocktail]=useState([])
const [isSingle,setSingle]=useState([])

const fetchData=useCallback(async ()=>{
  setLoading(true)
    try {
      const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${isSearchTeam}`)
      const data=await response.json()
      const {drinks}=data
       if(drinks){
       const updateCokTails=drinks.map((drink)=>{
     
        const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=drink
        return{
          id:idDrink,
          name:strDrink,
          image:strDrinkThumb,
          info:strAlcoholic,
          glass:strGlass
        }
       })
       setCocktail(updateCokTails)
       }else{
        setCocktail([])
       }
      setLoading(false)
    } catch (error) {
      console.log(error.response);
    }
   
},[isSearchTeam])

useEffect(()=>{
   fetchData()
},[isSearchTeam,fetchData])

  return <AppContext.Provider value={{isSingle,setSingle,isLoading,isCocktail,isSearchTeam,setSearchTerm,setCocktail,setLoading}}>
    {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}



export { AppContext, AppProvider }

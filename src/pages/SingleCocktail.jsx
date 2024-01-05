import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link,useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='



const SingleCocktail = () => {
  const {isSingle,setSingle,isLoading,setLoading}=useGlobalContext()
  const navigate = useNavigate();
  const {id}=useParams()

  const fetchData=async()=>{
    setLoading(true)
    const response=await fetch(`${url}${id}`)
    const data=await response.json()

    const { idDrink:cokId,strDrink:name,
      strDrinkThumb:image,
      strAlcoholic:info,
      strGlass:glass}=data.drinks[0]
   
 
    setSingle({cokId,name,image,info,glass
     });
     setLoading(false )
  }

  useEffect(()=>{

fetchData()
  },[])
  const {name,image,info,glass}=isSingle;

  if(isLoading){
    return <Loading/>
  }
  return (
    <section className='section cocktail-section'>
    <button className='btn btn-danger' onClick={() => navigate(-1)}>Go back</button>
    <div className="cocktail-footer">
     <h3>{name}</h3>
     <div className="img-container">
<img src={image} alt="" style={{width:'200px'}}/>
     </div>
     <h4>{glass}</h4>
     <p>{info}</p>
  </div>
</section>
  )
}

export default SingleCocktail

import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {isSearchTeam,setSearchTerm}=useGlobalContext()
  const refContainer=useRef()
  const handleSubmit=()=>{
    setSearchTerm(refContainer.current.value)
  }
  useEffect(()=>{
    refContainer.current.focus()
  },[])
  return (
 
    <section className='section search'> 
    <form action="" className="search-form" onSubmit={(e)=>e.preventDefault()}>
        <div className="form-control">
          <label htmlFor="name">search</label>
      <input type="text" ref={refContainer} onChange={handleSubmit} />
        </div>
    </form>
       
    </section>
    
  )
}

export default SearchForm

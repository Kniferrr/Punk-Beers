import React from 'react'
import "./Futter.css"
import { useSelector, useDispatch } from 'react-redux'
import {nextPage,beackPage} from "../redusers/Beers"

function Futter() {
    const dispatch = useDispatch()
    const BeersPage = useSelector((state) => state.Beers.page)
  return (
    
    <div className='NextBack'>
      <div onClick={()=>dispatch(beackPage())} className="navKeyFut"><h3>Back</h3></div>
      <div className="navKeyFut"><h3>{BeersPage}</h3></div>
      <div onClick={()=>dispatch(nextPage())} className="navKeyFut"><h3>Next</h3></div>
    </div>
    
  )
}

export default Futter
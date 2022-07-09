import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "./Items.css"
import {moreInfo,delmoreInfo} from "../redusers/Beers"



const CreateItems = (Beers) =>{

  const dispatch = useDispatch()
  const more = useSelector((state) => state.Beers.more)
  
  return (
    Beers.map((item)=>
    {
      if(item.id === more){
        return(
          <li className='Item' key={item.id}>
            
      <center><span className='ImgSlot'>
        <div>abv: {item.abv}</div>
        <div>attenuation level: {item.attenuation_level}</div>
        <div>boil volume: {item.boil_volume.value} {item.boil_volume.unit}</div>
        <div>contributed by: {item.contributed_by}</div>
        <div>ebc: {item.ebc}</div>
        <div>first brewed: {item.first_brewed}</div>
        <div>id: {item.id}</div>
        </span></center>
      <center><span className='ItemNameSlot'>{item.name}</span></center>

      <center><span><button onClick={function(e) {
    dispatch(delmoreInfo())          
  }} className="btn btn-dark">more</button></span></center>
      </li>
        )
      }else{
        return(
          <li className='Item' key={item.id}>
      <center><span className='ImgSlot'><img src={item.image_url}></img></span></center>
      <center><span className='ItemNameSlot'>{item.name}</span></center>
      <center><span><button onClick={function(e) {
    dispatch(moreInfo(item.id))          
  }} className="btn btn-dark">more</button></span></center>
      </li>
        )
      }
    }
      )
  )
}

function Items() {
    const Beers = useSelector((state) => state.Beers.items)
    const Items = CreateItems(Beers)
  return (
<ul>
  {Items}
</ul>
  )
}

export default Items
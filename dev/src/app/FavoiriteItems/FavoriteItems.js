import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import punkBeersSerwises from "../../serwises/punkBeersSerwises"
import {takeItems} from "../../redusers/Beers"
import { useEffect } from 'react';
import Items from '../../Items/Items';
import { Link } from 'react-router-dom';
import {delfavorites} from "../../redusers/Beers"

export function FavoriteItems(props) {
  const {page} = props;
  const dispatch = useDispatch()
  const FavItems = useSelector((state) => state.Beers.favoritesitems)
  
  
  
  

  return (
    FavItems.map((item)=>{
        return( <li className='Item' key={item.id}>
        <span className='ImgSlot'><img src={item.image_url}></img></span>
        <span className='ItemNameSlot'>{item.name}</span>
        <span><button  className="btn btn-dark buttonMore">more</button></span>
    <span><button 
    onClick={function(e) {
    dispatch(delfavorites(item.id))          
  }}
   className="btn btn-dark buttonfavorites">UnFavor</button></span>
        </li>)
    })
  )
}
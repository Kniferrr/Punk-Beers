import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import punkBeersSerwises from "../serwises/punkBeersSerwises"
import {takeItems} from "../redusers/Beers"
import { useEffect } from 'react';
import Items from '../Items/Items';

export function ItemsPage() {
  const Beers = useSelector((state) => state.Beers.items)
  const dispatch = useDispatch()

  const BeersPage = useSelector((state) => state.Beers.page)
  
  const BeersSerwises = new punkBeersSerwises();
 
  useEffect(() => {
    BeersSerwises
    .getAllBeers(`/beers?page=${BeersPage}`) 
    .then((beers) => {
        dispatch(takeItems(beers))
        })
        .catch();
  },[BeersPage]);

  console.log(Beers)
  console.log(Beers.length)
  

  return (
    <div className='blockCenter'>
     <Items/>
    </div>
  )
}
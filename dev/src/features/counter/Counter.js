import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import punkBeersSerwises from "../../serwises/punkBeersSerwises"

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const BeersPage = useSelector((state) => state.Beers.page)
  
  const BeersSerwises = new punkBeersSerwises();
  BeersSerwises
      .getAllBeers(`/beers?page=${BeersPage}`) 
      .then((beers) => {
          console.log(beers)
          })
          .catch();
  

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
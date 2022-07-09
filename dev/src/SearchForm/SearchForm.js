import React from 'react'
import "./SearchForm.css"
import { useSelector, useDispatch } from 'react-redux'
import {Submit,LableChange} from "../redusers/Form"
import punkBeersSerwises from "../serwises/punkBeersSerwises"
import {takeItems} from "../redusers/Beers"

function SearchForm() {
    const dispatch = useDispatch();
    const lable = useSelector((state) => state.Form.lable);
    const BeersSerwises = new punkBeersSerwises();
    const Beers = useSelector((state) => state.Beers.items)

    const onSubmit = (e) =>{
        e.preventDefault();
        BeersSerwises
    .getAllBeers(`/beers?beer_name=${lable}`) 
    .then((beers) => {
        dispatch(takeItems(beers))
        })
        .catch();
        
    }
    
      const onLableChange = (e) => {
        e.preventDefault();
        dispatch(LableChange(e.target.value))
      }
    
  return (
    <center>
        <div className='ItemSearch'>
    <form className='d-flex' onSubmit={onSubmit}>
                <input type="text" className='form-control'  placeholder="neds"  onChange={onLableChange} value={ lable }/>
                <button className='btn btn-outline-secondary'>  Search </button>
            </form>
    </div>
    </center>
  )
}

export default SearchForm
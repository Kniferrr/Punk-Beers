import React from 'react'
import "./SearchForm.css"
import { useSelector, useDispatch } from 'react-redux'
import {Submit,LableChange} from "../redusers/Form"
import punkBeersSerwises from "../serwises/punkBeersSerwises"
import {takeItems,setFavoriteItemMod,takeSeachItems} from "../redusers/Beers"
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function SearchForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const lable = useSelector((state) => state.Form.lable);
    const BeersSerwises = new punkBeersSerwises();
    const Beers = useSelector((state) => state.Beers.items)

    const onSubmit = (e) =>{
        e.preventDefault();
        BeersSerwises
    .getAllBeers(`/beers?beer_name=${lable}`) 
    .then((beers) => {
      navigate('/search');
        dispatch(takeSeachItems(beers))
        })
        .catch();
        
    }
    
      const onLableChange = (e) => {
        e.preventDefault();
        dispatch(LableChange(e.target.value))
      }
    
  return (
    <div className="FlexHeader">
      <span className='Logo'><Link to='/Punk-Beers' className='btnfavorite'>Punk_Beer</Link></span>
        <span className='ItemSearch'>
        
        <form className='d-flex' onSubmit={onSubmit}>
                <input type="text" className='form-control'  placeholder="neds"  onChange={onLableChange} value={ lable }/>
                <button className='btn btn-outline-secondary'>  Search </button>
            </form>
    </span>
    <Link to='/favoirite' className='btnfavorite'><button className='btn btn-dark btnfavorite' >Favorite</button></Link>
    </div>
  )
}

export default SearchForm
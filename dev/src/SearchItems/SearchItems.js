import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {moreInfo,delmoreInfo,favorites} from "../redusers/Beers"

function SearchItems() {

        const dispatch = useDispatch()
        const SearchItems = useSelector((state) => state.Beers.seachitems)
        const more = useSelector((state) => state.Beers.more)
        console.log("search")
        console.log(SearchItems)
        
        
        
      
        return (
            SearchItems.map((item)=>{

                if(item.id === more){
                    return(
                      <li className='Item' key={item.id}>
                        
                  <span className='ImgSlot'>
                    <div>abv: {item.abv}</div>
                    <div>attenuation level: {item.attenuation_level}</div>
                    <div>boil volume: {item.boil_volume.value} {item.boil_volume.unit}</div>
                    <div>contributed by: {item.contributed_by}</div>
                    <div>ebc: {item.ebc}</div>
                    <div>first brewed: {item.first_brewed}</div>
                    <div>id: {item.id}</div>
                    </span>
                  <span className='ItemNameSlot'>{item.name}</span>
            
                  <span ><button onClick={function(e) {
                dispatch(delmoreInfo())          
              }} className="btn btn-dark buttonMore">more</button></span>
              <span><button onClick={function(e) {
                dispatch(favorites(item.id))          
              }} className="btn btn-dark buttonfavorites">favorites</button></span>
                  </li>
                    )
                  }else{
                    return(
                      <li className='Item' key={item.id}>
                  <span className='ImgSlot'><img src={item.image_url}></img></span>
                  <span className='ItemNameSlot'>{item.name}</span>
                  <span><button onClick={function(e) {
                dispatch(moreInfo(item.id))          
              }} className="btn btn-dark buttonMore">more</button></span>
              <span><button onClick={function(e) {
                dispatch(favorites(item.id))          
              }} className="btn btn-dark buttonfavorites">favorites</button></span>
                  </li>
                    )
                  }


          })
        )
    
}



export default SearchItems
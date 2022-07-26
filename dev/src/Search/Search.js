import React from 'react'
import { FavoriteItems } from '../app/FavoiriteItems/FavoriteItems'
import { useDispatch, useSelector } from 'react-redux'
import SearchItems from '../SearchItems/SearchItems'

function Search() {
  return (
    <div className='favoriteItemspage'>
      <SearchItems />
      </div>
  )
}


export default Search
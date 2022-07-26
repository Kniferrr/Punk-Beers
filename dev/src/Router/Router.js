import React from 'react'
import { ItemsPage } from '../ItemsPage/ItemsPage'
import Search from '../Search/Search';
import FavoriteItemsPage from '../FavoriteItemsPage/FavoriteItemsPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ItemsPage />} />
        <Route path="/Punk-Beers" element={<ItemsPage />} />
        <Route path="/favoirite" element={<FavoriteItemsPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
  )
}

export default Router
import React from 'react'
import { ItemsPage } from '../ItemsPage/ItemsPage'
import FavoriteItemsPage from '../FavoriteItemsPage/FavoriteItemsPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ItemsPage />} />
        <Route path="/Punk-Beers" element={<ItemsPage />} />
        <Route path="/favoirite" element={<FavoriteItemsPage />} />
      </Routes>
  )
}

export default Router
import React from 'react'
import { ItemsPage } from '../ItemsPage/ItemsPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Router() {
  return (
    <Routes>
        <Route path="/Punk-Beers" element={<ItemsPage />} />
        <Route path="/favoirite" element={<ItemsPage />} />
      </Routes>
  )
}

export default Router
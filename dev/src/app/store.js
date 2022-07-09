
import Form from "../redusers/Form"
import Beers from '../redusers/Beers'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    Form: Form,
    Beers: Beers,
},
})
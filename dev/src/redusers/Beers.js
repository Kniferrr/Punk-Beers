import { createSlice } from '@reduxjs/toolkit'

export const Beers = createSlice({
  name: 'Beers',
  initialState: {
    page: 1,
    items: [],
    favoritesitems: [],
    more: 0,
  },
  reducers: {
    takeItems: (state,beers) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
        state.items = beers.payload;
    },
    nextPage: (state) => {
        state.page += 1;
    },
    beackPage: (state) => {
      if(state.page<1){
        state.page = 0;
      }else{
        state.page -= 1;
      }
  },
  moreInfo: (state,idx) => {
    state.more = idx.payload;
},
delmoreInfo: (state) => {
  state.more = 0;
},
favorites: (state,idx) => {

  const myItem = state.items.find((item) => item.id === idx.payload);
  console.log(myItem)
  
  

    state.favoritesitems+=myItem;
  

  console.log("items")
  console.log(state.favoritesitems)
},
  },
})

// Action creators are generated for each case reducer function
export const { takeItems, nextPage,beackPage,moreInfo,delmoreInfo,favorites,defavorites } = Beers.actions

export default Beers.reducer
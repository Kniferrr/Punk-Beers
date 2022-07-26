import { createSlice } from '@reduxjs/toolkit'

export const Beers = createSlice({
  name: 'Beers',
  initialState: {
    mod: "items",
    page: 1,
    items: [],
    seachitems: [],
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
    takeSeachItems: (state,beers) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
        state.seachitems = beers.payload;
        console.log(beers.payload)
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
  const myItem = state.items.find((el)=> el.id === idx.payload) //
  

  const status = state.favoritesitems.find((el)=> el.id === myItem.id)
  

  if(status === undefined){
    state.favoritesitems.push(myItem);
  }
  console.log(state.favoritesitems.length)
},
delfavorites: (state,idx) => {
  state.favoritesitems = state.favoritesitems.filter((el)=>el.id !== idx.payload)
},
  },
})

// Action creators are generated for each case reducer function
export const { takeItems, nextPage,beackPage,moreInfo,delmoreInfo,favorites,defavorites, delfavorites,takeSeachItems} = Beers.actions

export default Beers.reducer
import { createSlice } from '@reduxjs/toolkit'

export const Form = createSlice({
  name: 'Form',
  initialState: {
    lable: "",
  },
  reducers: {
    Submit: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
        state.items = 1;
    },
    LableChange: (state,e) => {
          state.lable = e.payload;
      },
    
  
  },
})

// Action creators are generated for each case reducer function
export const {Submit,LableChange } = Form.actions

export default Form.reducer
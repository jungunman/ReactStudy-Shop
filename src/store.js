import { configureStore, createSlice } from '@reduxjs/toolkit'

const user = createSlice({
    name : "user",
    initialState : "김희성",
    reducers : {
        changeName(state){
            return '애기씨 남편' + state
        }
    }
});

export let {changeName} = user.actions;

const cart = createSlice({
    name : "cart",
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] 
});




export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 


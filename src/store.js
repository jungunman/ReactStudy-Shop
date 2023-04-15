import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from "./store/userSlice.js"



const cart = createSlice({
    name : "cart",
    initialState : [
        {id : 9, name : 'White and Black', count : 2},
        {id : 8, name : 'Grey Yordan', count : 1}
      ] ,
      reducers : {
        upCount(state, action){
            let finded = state.find((e)=>e.id === action.payload);
            finded.count += 1;
        },
        addCart(state, action){
            if(state.find((e)=>e.id === action.payload.id)){
                let finded = state.find((e)=>e.id === action.payload.id);
                finded.count += 1;
            }else{
                state.push(action.payload);
            }
        },
        deleteCart(state,action){
            return state.filter((e)=>e.id !== action.payload); 
        }
      }
});

export let {upCount,addCart,deleteCart} = cart.actions;




export default configureStore({
  reducer: { 
    user : user.reducer,
    cart : cart.reducer
  }
}) 


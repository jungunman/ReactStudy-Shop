import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name : "user",
    initialState : {name:"김희성", age:20},
    reducers : {
        changeName(state){
            state.name = "유진초이";
            // return {name:"유진초이", age:20}
        },
        changeAge(state, howMuch){
            state.age += howMuch.payload;
        }
    }
});

export let {changeName ,changeAge} = user.actions;

export default user;
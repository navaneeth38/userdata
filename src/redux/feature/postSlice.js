import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'

export const getPosts = createAsyncThunk("posts/getPosts",async ()=>{
  return fetch(" https://reqres.in/api/users" ) 
  .then(res => res.json())
  .then(data => data.data)
})

const postSlice = createSlice(({
    name: "posts",
    initialState: {
        posts: [],
        loading: false
    },
    extraReducers:{
    [getPosts.pending]: (state,action)=>{
        state.loading = true
    },
    [getPosts.fulfilled]: (state,action)=>{
        state.loading = false
        state.posts =action.payload
    },
    [getPosts.rejected]: (state,action)=>{
        state.loading = false
        console.error("error");
    }
    }
}))

export default postSlice.reducer
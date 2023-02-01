import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

 export const getBooks = createAsyncThunk("book/getBooks", async (data,thunkAPi) => {
    try {
        const response = fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error)
        
    }
})
const bookSlice = createSlice({
    name: 'book',
    initialState: {
    books:null,
    },
    reducers: {   
    },
    extraReducers: {
        [getBooks.pending]: (state, action) => {
            console.log(action)
        },
        [getBooks.fulfilled]: (state, action) => {
            console.log(action)
        },
        [getBooks.rejected]: (state, action) => {
            console.log(action)
        }
    }
})
export default bookSlice.reducer
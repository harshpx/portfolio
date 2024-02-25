import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode:true,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state)=>{
            state.darkMode = !state.darkMode;
        }
    }
})

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;
import {createSlice} from '@reduxjs/toolkit'; 

const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState: {
        searchTerm: '',
        selectedGenreId: ''        
    },
    reducers:{
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        changeSelectedGenreId(state, action) {
            state.selectedGenreId = action.payload;
        },
        clearSelectedGenreId(state) {
            state.selectedGenreId = '';
        }
    }

})

export const {changeSearchTerm, changeSelectedGenreId, clearSelectedGenreId} = searchMovieSlice.actions; 
export const searchMovieReducer = searchMovieSlice.reducer;  //combined reducers
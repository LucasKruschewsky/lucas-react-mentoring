import { api } from '@/services/axiosConfig';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllMovies = createAsyncThunk(
  'movieList/getAllMovies',
  async () => {
    const response = await api.get('/movies');

    return response.data.data;
  }
);

const movieListSlice = createSlice({
  name: 'movieList',
  initialState: {
    list: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMovies.fulfilled, (state, { payload }) => ({
        ...state,
        list: payload,
        status: 'success',
      }))
      .addCase(getAllMovies.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(getAllMovies.rejected, (state) => ({
        ...state,
        status: 'failed',
      }));
  },
});

// Reducer
export const movieListReducer = movieListSlice.reducer;

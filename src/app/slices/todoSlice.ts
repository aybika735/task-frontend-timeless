import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ICardProps {
  dob: { date: string; age: number };
  login: { salt: number };
  picture: { medium: string };
  name: { title: string; first: string; last: string };
  email: string;
  phone: string;
  date: string;
  location: { city: string; state: string; country: string };
  gender: string;
  age: number;
}
export interface initialStateProps {
  loading: boolean;
  todos: ICardProps[];
  error: string | null | undefined | unknown;
}

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=500");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.results);
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState: initialStateProps = {
  loading: true,
  todos: [],
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.todos = [];
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default todosSlice.reducer;

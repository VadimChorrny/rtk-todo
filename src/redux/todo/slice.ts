import { createSlice } from '@reduxjs/toolkit';
import { TodoSliceState } from './types';

const initialState: TodoSliceState = {
  items: [
    { id: 0, name: 'Купити хліб' },
    { id: 1, name: 'Прочитати книгу' },
    { id: 2, name: 'Купити супутник для ЗСУ' },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.items.push(action.payload);
    },
    removeTodoById(state, action) {
      state.items.splice(action.payload, 1); // 2nd parameter means remove one item only
    },
    removeTodo(state) {
      state.items.pop();
    },
  },
});

export const { addTodo, removeTodo, removeTodoById } = todoSlice.actions;

export default todoSlice.reducer;

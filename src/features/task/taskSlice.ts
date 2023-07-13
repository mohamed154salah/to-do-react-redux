import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid";

export interface TaskState {
  id: string,
  text: string,
  important: boolean,
  completed: boolean,
}
const initialState = [] as TaskState[];



export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<TaskState>) => {

        state.push(action.payload);
      },
      prepare: (text: string) => ({
        payload: {
          id: uuidv4(),
          text,
          important: false,
          completed: false,
        } as TaskState,
      })

    },
    removeTask(state, action: PayloadAction<string>) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    setTaskCompleted(
      state,
      action: PayloadAction<{
        completed: boolean,
        id: string
      }>
    ) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    setTaskImportant(
      state,
      action: PayloadAction<{
        important: boolean,
        id: string
      }>
    ) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].important = action.payload.important;
    },

  },
})

export const { addTask, removeTask, setTaskImportant, setTaskCompleted } = TaskSlice.actions;
export default TaskSlice.reducer;

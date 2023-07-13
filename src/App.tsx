import React from 'react';
import './App.css';
import type { RootState } from './app/store'
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from './features/task/taskSlice'
import { Stack, TextField, Button } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Task from './components/Task';
function App() {
  const [text, setText] = React.useState('')
  const task = useSelector((state: RootState) => state)
  const dispatch = useDispatch()
  return (
    <div className="App-header">
      <h1>Your To-Do List</h1>
      <div className='add-task'>
        <TextField id="outlined-basic" label="Your Task"
          onChange={(e) => setText(e.target.value)}
          value={text}
          variant="outlined" />
        <Button style={{ backgroundColor: "#51a055",margin:"10px" }}
          onClick={() => {
            dispatch(addTask(text));
            setText('');
          }} variant="contained" startIcon={<AddTaskIcon />}>
          Add
        </Button>
      </div>
      <Stack spacing={2}>
        {task.task.map((task) => {
          return (
            <Task key={task.id} task={task} />
          )

        })}
      </Stack>
    </div>
  );
}

export default App;

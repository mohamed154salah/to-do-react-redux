import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTask, setTaskImportant, setTaskCompleted } from '../features/task/taskSlice'
import PropTypes from 'prop-types'
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import "../index.css"
function Task(props: any) {
  const dispatch = useDispatch()

  const task = props.task;
  return (
    <div className="task">
      <div className='text' style={{
        textDecoration: task.completed ? "line-through" : "none",
      }}
        onClick={() => dispatch(setTaskCompleted({ id: task.id, completed: !task.completed }))}>{task.text}</div>

      <div className='important' style={{ color: task.important ? "#51a055" : "white" }}
        onClick={() => dispatch(setTaskImportant({ id: task.id, important: !task.important }))} > <LabelImportantIcon /></div>

      <Button className='button' style={{backgroundColor:"#f44336"}} onClick={() => dispatch(removeTask(task.id))} variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </div>
  )
}

Task.propTypes = { task: PropTypes.object }

export default Task

import React from 'react'
import { useState } from 'react'

const Todo = () => {

    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState('')
    const [username, setUsername] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState(false)
    const [taskType, setType] = useState(false)
    const [error, setError] = useState(false)
    const [currentPage, setCurrentPage] = useState(false)
    const tasksPerPage = 5

    
    return (
    <div>
      
    </div>
  )
}

export default Todo

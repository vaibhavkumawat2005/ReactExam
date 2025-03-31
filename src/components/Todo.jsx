import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState(false);
  const [taskType, setTaskType] = useState("office");
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      setTasks(response.data);
    } catch (error) {
      setError("Failed to load tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (task.length < 3) {
      setError("Task must be at least 3 characters long");
      return;
    }
    if (!username.trim()) {
      setError("Username is required");
      return;
    }
    if (!date) {
      setError("Date is required");
      return;
    }

    const newTask = {
      username,
      task,
      date,
      status: status ? 1 : 0,
      task_type: taskType,
    };

    try {
      await axios.post("http://localhost:3000/tasks", newTask);
      setTask("");
      setUsername("");
      setDate("");
      setStatus(false);
      setTaskType("office");
      fetchTasks();
    } catch (error) {
      setError("Failed to add task");
    }
  };

  const handleStatusChange = async (taskId, currentStatus) => {
    const updatedStatus = currentStatus === 1 ? 0 : 1;
    try {
      await axios.patch(`http://localhost:3000/tasks/${taskId}`, {
        status: updatedStatus,
      });
      fetchTasks();
    } catch (error) {
      setError("Failed to update status");
    }
  };

  const getTaskTypeColor = (type) => {
    switch (type) {
      case "office": return "bg-danger bg-opacity-10 border-danger";
      case "personal": return "bg-warning bg-opacity-10 border-warning";
      case "family": return "bg-success bg-opacity-10 border-success";
      case "friends": return "bg-info bg-opacity-10 border-info";
      default: return "bg-secondary bg-opacity-10 border-secondary";
    }
  };

  return (
    <div className="container mt-5" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <h1 className="mb-4 text-center">Todo List</h1>

      <form className="card p-4 mb-4 shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
            id="statusCheck"
          />
          <label className="form-check-label" htmlFor="statusCheck">
            Completed
          </label>
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={taskType}
            onChange={(e) => setTaskType(e.target.value)}
          >
            <option value="office">Office</option>
            <option value="personal">Personal</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Add Task
        </button>
      </form>

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      <div className="row">
        {tasks.map((task) => (
          <div key={task.id} className="col-12 mb-3">
            <div className={`card shadow-sm ${getTaskTypeColor(task.task_type)} ${task.status === 1 ? 'bg-light' : ''}`}>
              <div className="card-body">
                <h5 className="card-title">{task.task}</h5>
                <p className="card-text">Username: {task.username}</p>
                <p className="card-text">Date: {task.date}</p>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={task.status === 1}
                    onChange={() => handleStatusChange(task.id, task.status)}
                    id={`status-${task.id}`}
                  />
                  <label className="form-check-label" htmlFor={`status-${task.id}`}>
                    Completed
                  </label>
                </div>
                <p className="card-text">Type: {task.task_type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
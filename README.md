 <h1>Todo App</h1>
    <p>A simple Todo List application built with React and Bootstrap.</p>

  <h2>Features</h2>
    <ul>
        <li>Add new tasks with a username, date, status, and category.</li>
        <li>View a list of tasks with different background colors based on task type.</li>
        <li>Update task status dynamically.</li>
        <li>Form validation for better user experience.</li>
    </ul>

  <h1>Screenshot and video</h1>

  

https://github.com/user-attachments/assets/f89bf84a-28f6-4c44-b259-ec64b0b12ff0



  ![Screenshot 2025-03-31 105524](https://github.com/user-attachments/assets/ae368eca-d087-45d5-8326-8b9c19f1f9a5)
  ![Screenshot 2025-03-31 110348](https://github.com/user-attachments/assets/de950f84-9dfb-431c-9fc0-53eefc398d12)



  <h2>Installation</h2>
    <p>Follow these steps to set up and run the application:</p>
    <pre><code>git clone https://github.com/your-repo/todo-app.git
cd todo-app
npm install
npm start</code></pre>

   <h2>Backend Setup</h2>
    <p>This app fetches tasks from a local API running at <code>http://localhost:3000/tasks</code>. You need a backend server to store tasks.</p>
    <p>Use <a href="https://www.npmjs.com/package/json-server">json-server</a> for a quick mock API:</p>
    <pre><code>npm install -g json-server
json-server --watch db.json --port 3000</code></pre>

   <h2>Usage</h2>
    <p>Open <code>http://localhost:3000</code> in your browser and start adding tasks.</p>

  <h2>Technologies Used</h2>
    <ul>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Axios</li>
        <li>json-server (for API)</li>
    </ul>

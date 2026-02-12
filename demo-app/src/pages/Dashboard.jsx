import React from "react";

function Dashboard({ setIsLoggedIn }) {
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  function addTask() {
    if (!newTask) return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function deleteTask(i) {
    setTasks(tasks.filter((_, index) => index !== i));
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* TOP NAVBAR */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-lg font-bold">Task Manager</h1>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-sm border px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* ADD TASK */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="font-semibold mb-4">Add New Task</h2>

          <div className="flex gap-3">
            <input
              className="border p-2 flex-1 rounded"
              placeholder="Enter task name"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button
              onClick={addTask}
              className="bg-black text-white px-4 rounded"
            >
              Add
            </button>
          </div>
        </div>

        {/* TASK LIST */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="font-semibold mb-4">Your Tasks</h2>

          {tasks.length === 0 && (
            <p className="text-gray-500 text-sm">
              No tasks added yet
            </p>
          )}

          {tasks.map((task, i) => (
            <div
              key={i}
              className="flex justify-between items-center border-b py-3"
            >
              <span>{task}</span>
              <button
                onClick={() => deleteTask(i)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

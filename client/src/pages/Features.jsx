import React, { useState, useEffect } from "react";
import api from "../api";


const Features = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);

  const limit = 5;

  const fetchTasks = async () => {
    const res = await api.get(
      `/tasks?search=${search}&status=${status}&priority=${priority}&page=${page}&limit=${limit}`
    );
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await api.post("/tasks", { title, priority });
    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const updateTask = async (id, newStatus) => {
    await api.put(`/tasks/${id}`, { status: newStatus });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, [page, search, status]);

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white text-black shadow-xl rounded-xl p-8">

      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>

      {/* Add Task */}
      <div className="flex gap-3 mb-5">
        <input
          className="flex-1 border border-gray-400 rounded-lg px-3 py-2 focus:outline-none"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="border border-gray-400 rounded-lg px-3 py-2"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          onClick={addTask}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Add
        </button>
      </div>

      {/* Search + Filter */}
      <div className="flex gap-3 mb-5">

        <input
          className="flex-1 border border-gray-400 rounded-lg px-3 py-2 focus:outline-none"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border border-gray-400 rounded-lg px-3 py-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>

      </div>

      {/* Task List */}
      <ul className="space-y-3">
        {tasks.map((t) => (
          <li
            key={t._id}
            className="flex justify-between items-center border border-gray-300 px-4 py-3 rounded-lg"
          >
            <div>
              <p className="font-semibold">{t.title}</p>
              <p className="text-sm text-gray-600">
                {t.priority} • {t.status}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => updateTask(t._id, "completed")}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                ✔
              </button>

              <button
                onClick={() => deleteTask(t._id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Prev
        </button>

        <span className="font-semibold">Page {page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Features;

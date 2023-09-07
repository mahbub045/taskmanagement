import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Low',
    });

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        // Load tasks from local storage when component mounts
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { ...task };
        setTasks([...tasks, newTask]);
        setTask({
            title: '',
            description: '',
            dueDate: '',
            priority: 'Low',
        });
    };

    useEffect(() => {
        // Save tasks to local storage whenever tasks change
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    return (
        <Layout>
            <div className="bg-green-50 p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-green-800">Create a New Task</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 text-green-800">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-green-300 rounded mb-4"
                    />

                    <label className="block mb-2 text-green-800">Description:</label>
                    <textarea
                        name="description"
                        value={task.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border border-green-300 rounded mb-4"
                    ></textarea>
                    <div className='flex justify-center'>
                        <label className="block mt-2 mr-2 text-green-800">Due Date:</label>
                        <input
                            type="date"
                            name="dueDate"
                            value={task.dueDate}
                            onChange={handleInputChange}
                            className="w-40 p-2 border border-green-300 rounded mb-4"
                        />
                    </div>
                    <div className='flex justify-center'>
                        <label className="block mt-2 mr-2 text-green-800">Priority:</label>
                        <select
                            name="priority"
                            value={task.priority}
                            onChange={handleInputChange}
                            className="w-32 p-2 border border-green-300 rounded mb-4"
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>


                    <div className="flex justify-center">
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                            Create Task
                        </button>
                    </div>
                </form>
                <div className="mt-8">
                    <div className="flex flex-col mt-8 ml-4">
                        <h2 className="text-2xl font-bold text-green-800">Tasks</h2>
                    </div>
                    <table className="w-full border border-collapse">
                        <thead>
                            <tr>
                                <th className="border border-green-300 p-2">Title</th>
                                <th className="border border-green-300 p-2">Description</th>
                                <th className="border border-green-300 p-2">Due Date</th>
                                <th className="border border-green-300 p-2">Priority</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td className="border border-green-300 p-2">{task.title}</td>
                                    <td className="border border-green-300 p-2">{task.description}</td>
                                    <td className="border border-green-300 p-2">{task.dueDate}</td>
                                    <td className="border border-green-300 p-2">{task.priority}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default TaskForm;

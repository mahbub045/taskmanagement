import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedView, setSelectedView] = useState('Priority'); // Default view is Priority

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            const priorityMap = {
                'Low': 1,
                'Medium': 2,
                'High': 3
            };

            const sortedTasks = storedTasks.sort((a, b) => {
                if (selectedView === 'Priority') {
                    return priorityMap[b.priority] - priorityMap[a.priority];
                } else if (selectedView === 'DueDate') {
                    return new Date(a.dueDate) - new Date(b.dueDate);
                }
                return 0;
            });
            setTasks(sortedTasks);
        }
    }, [selectedView]);

    const handleViewChange = (view) => {
        setSelectedView(view);
    };

    return (
        <>
            <Layout>
                <div className="mt-8">
                    <div className="flex flex-col mb-2 ml-4">
                        <h2 className="text-2xl font-bold text-green-800">All Tasks</h2>
                    </div>
                    <div className="flex justify-end mb-4 mr-4">
                        <label className="mr-2">View:</label>
                        <select
                            value={selectedView}
                            onChange={(e) => handleViewChange(e.target.value)}
                        >
                            <option value="Priority">Priority</option>
                            <option value="DueDate">Due Date</option>
                        </select>
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
            </Layout>
        </>
    )
}

export default Home;

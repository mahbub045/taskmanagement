import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);
    return (
        <>
            <Layout>
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
            </Layout>
        </>
    )
}

export default Home;
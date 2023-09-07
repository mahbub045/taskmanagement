import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const Profile = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
            setTasks(storedTasks);
        }
    }, []);

    // Retrieve profile data from local storage
    const profilePicture = localStorage.getItem('profilePicture');
    const username = localStorage.getItem('fullName');
    const bio = localStorage.getItem('bio');

    return (
        <div>
            <Layout>
                <div className="flex justify-end p-2">
                    <a href="/edit-profile" className="text-green-500 hover:underline">Edit Profile</a>
                </div>
                <div className="flex flex-col items-center mt-8">
                    {profilePicture ? (
                        <img src={profilePicture} alt="Profile" className="w-32 h-32 rounded-full mb-4 p-2" />
                    ) : (
                        <img src="/image/default-profileImg.png" alt="Default Profile" className="w-32 h-32 rounded-full mb-4 p-2" />
                    )}
                    <h2 className="text-2xl font-bold mb-2">{username}</h2>
                    {bio ? (
                        <p className="text-gray-600 text-center max-w-md">{bio}</p>
                    ) : (
                        <p className="text-gray-600 text-center max-w-md">There is no Bio here</p>
                    )}
                </div>

                <div className="mt-8">
                    <div className="flex flex-col mt-8 ml-4">
                        <h2 className="text-2xl font-bold text-green-800">Tasks</h2>
                        <a href="/create-task" className='ml-auto mb-2 text-green-500 hover:underline text-xl font-bold'>+Create Task</a>
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
        </div>
    );
};

export default Profile;

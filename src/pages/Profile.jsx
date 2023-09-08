import React, { useEffect, useState } from 'react';
import AssignTask from '../components/AssignTask';
import Layout from '../components/Layout';

const Profile = () => {
    const [tasks, setTasks] = useState([]);
    const [teamMembers] = useState([ // Sample team members data
        { id: 1, name: 'Rahim Mandal' },
        { id: 2, name: 'Karim Mandal' },
        { id: 3, name: 'Asif Ali' },
        // Add more team members as needed
    ]);

    const assignTask = (taskId, selectedMember) => {
        const updatedTasks = tasks.map((task, index) => {
            if (index === taskId) {
                return { ...task, assignedTo: selectedMember };
            }
            return task;
        });

        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

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
                                <th className="border border-green-300 p-2">Assigned To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td className="border border-green-300 p-2">{task.title}</td>
                                    <td className="border border-green-300 p-2">{task.description}</td>
                                    <td className="border border-green-300 p-2">{task.dueDate}</td>
                                    <td className="border border-green-300 p-2">{task.priority}</td>
                                    <td className="border border-green-300 p-2 flex flex-col items-center">
                                        {task.assignedTo ? task.assignedTo : "Not Assigned"}
                                        <AssignTask teamMembers={teamMembers} assignTask={assignTask} />
                                    </td>
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

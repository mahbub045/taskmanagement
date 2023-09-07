import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Profile = () => {
    // Retrieve profile data from local storage
    const profilePicture = localStorage.getItem('profilePicture');
    const username = localStorage.getItem('fullName');
    const bio = localStorage.getItem('bio');

    return (
        <div>
            <Layout>
                <div className="flex justify-end p-4">
                    <Link to="/edit-profile" className="text-green-500 hover:underline">Edit Profile</Link>
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
                        <p className="text-gray-600 text-center max-w-md">There is no Boi here</p>
                    )}
                </div>
            </Layout>
        </div>
    );
};

export default Profile;

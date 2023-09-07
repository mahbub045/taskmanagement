// EditProfile.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const EditProfile = () => {
    const [profilePicture, setProfilePicture] = useState('');
    const [bio, setBio] = useState('');

    const navigate = useNavigate();

    const handlePictureChange = (e) => {
        // Handle profile picture change
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setProfilePicture(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();

        // Save profilePicture and bio to localStorage
        localStorage.setItem('profilePicture', profilePicture);
        localStorage.setItem('bio', bio);

        // Redirect to Profile page
        navigate('/profile');
    };

    return (
        <div>
            <Layout>
                <div className="flex flex-col items-center mt-8">
                    <input type="file" accept="image/*" onChange={handlePictureChange} className='border border-green-500 focus:outline-none w-96 text-green-600' />
                    {profilePicture && (
                        <img src={profilePicture} alt="Profile" className="w-32 h-32  rounded-full mb-4 p-2" />
                    )}
                    <div className='py-3'>
                        <textarea
                            value={bio}
                            onChange={handleBioChange}
                            placeholder="Enter your bio"
                            className="w-96 h-32 p-2 border border-green-500 focus:outline-none rounded mb-4"
                        />
                    </div>

                    <button onClick={handleUpdateProfile} className="bg-green-500 text-white font-semibold py-2 px-4 rounded">
                        Update Profile
                    </button>
                </div>
            </Layout>
        </div>
    );
};

export default EditProfile;

import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [registered, setRegistered] = useState(false); // New state to track registration status
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = { fullName: '', email: '', password: '', confirmPassword: '' };

        if (!formData.fullName) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        if (!newErrors.fullName && !newErrors.email && !newErrors.password && !newErrors.confirmPassword) {
            localStorage.setItem('fullName', formData.fullName);
            localStorage.setItem('email', formData.email);
            localStorage.setItem('password', formData.password);
            alert('Registration successful!');
            setRegistered(true); // Set registered to true after successful registration
        }
    };

    if (registered) {
        navigate('/');
    }

    return (
        <div className='bg-gradient-to-r from-green-400 to-blue-400'>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    {/* Your existing JSX for the registration form */}
                    <h2 className="text-2xl font-semibold mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-green-600 font-semibold">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none ${errors.fullName ? 'border-red-500' : 'border-green-300'
                                    }`}
                            />
                            {errors.fullName && (
                                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-green-600 font-semibold">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none ${errors.email ? 'border-red-500' : 'border-green-300'
                                    }`}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-green-600 font-semibold">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none ${errors.password ? 'border-red-500' : 'border-green-300'
                                    }`}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="block text-green-600 font-semibold">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className={`w-full p-2 border rounded-md focus:outline-none ${errors.confirmPassword ? 'border-red-500' : 'border-green-300'
                                    }`}
                            />
                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Register
                        </button>
                    </form>
                    <p className="mt-4 text-gray-600 text-center">
                        Already have an Account?{' '}
                        <a href="/" className="text-green-500 hover:underline">
                            Login Here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );

};

export default Register;

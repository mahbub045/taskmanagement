import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    useEffect(() => {
        // Retrieve data from local storage (assuming you've set it during registration)
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (storedEmail && storedPassword) {
            // Populate the form with the retrieved data
            setFormData({
                email: storedEmail,
                password: storedPassword,
            });
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = { email: '', password: '' };

        if (!formData.email) {
            newErrors.email = 'Email is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        if (!newErrors.email && !newErrors.password) {
            // Check if email and password match stored values
            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');

            if (formData.email === storedEmail && formData.password === storedPassword) {
                console.log('Login successful!');
                // Redirect to home page
                navigate('/home');
            } else {
                console.log('Invalid email or password');
            }
        }
    };

    return (
        <div className='bg-gradient-to-r from-green-400 to-blue-400'>
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-semibold mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
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
                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-gray-600 text-center">
                        Don&apos;t have an Account?{' '}
                        <a href="/register" className="text-green-500 hover:underline">
                            Register Here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;

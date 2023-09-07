const Layout = ({ children }) => {
    // Retrieve users data from local storage
    const usersData = JSON.parse(localStorage.getItem('users'));

    // Retrieve username from the first user in the array (assuming it's an array)
    const username = usersData && usersData.length > 0 ? usersData[0].fullName : null;

    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <header>
                <nav className='flex justify-between items-center p-4 mx-auto shadow-md'>
                    <div>
                        <a href="/home" className='text-xl italic font-bold text-green-600'>TaskManager</a>
                    </div>
                    <div className="z-10 flex items-center">
                        <a href="/" className='p-1 font-bold text-red-500 hover:text-red-600'>Logout</a>
                        {username && <a href="/profile" title='Goto Profile' className='p-1 font-bold text-green-500 hover:text-green-600'>{username}</a>}
                    </div>
                </nav>
            </header>
            <main className='px-4'>
                {children}
            </main>
            <footer className='flex justify-center items-center shadow-inner h-10'>
                <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved by TaskManager</p>
            </footer>
        </div>
    )
};

export default Layout;
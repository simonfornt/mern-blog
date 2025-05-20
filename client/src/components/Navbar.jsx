import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className='bg-white border-b shadow-sm py-4 px-6 mb-6'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        <Link to='/' className='text-xl font-bold text-blue-600'>MyBlog</Link>
        <div className='space-x-4'>
          <Link to='/' className='text gray-700 hover:text-blue-600'>Home</Link>
          <Link to='/login' className='text gray-700 hover:text-blue-600'>Login</Link>
          <Link to='/register' className='text gray-700 hover:text-blue-600'>Register</Link>
        </div>
      </div>

    </nav>
  );
}

export default Navbar;
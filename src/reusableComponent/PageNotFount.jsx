import react from 'react';
import PageNot from "../assets/Error - 404-2.jpg"
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='flex flex-col justify-center items-center bg-white text-black/70 text-xl w-full h-screen gap-6'>
            <h1>404: Page Not Found</h1>
            <img src={PageNot} alt="404 error" className='w-96 h-72'/>
            <p>Sorry, the page you are looking for does not exist.</p>
            <button className='px-3 py-2 bg-[#0f141f] text-white/70 rounded-lg hover:bg-white hover:border border-[#0f141f] hover:text-black/90 transition-colors duration-300'>
                <Link to="/">Go back to home</Link>
            </button>
        </div>
    )
}

export default NotFoundPage
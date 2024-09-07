import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-5xl text-center'>Oppss!!</h2>
            <Link to='/home'><button>go home</button></Link>
        </div>
    );
};

export default ErrorPage;
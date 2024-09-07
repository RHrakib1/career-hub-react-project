import React, { useEffect, useState } from 'react';
import Cate from '../Cate/Cate';

const Category = () => {
    const [category, setcategory] = useState([]);

    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setcategory(data))
    }, [])
    return (
        <div>
            <div className='text-center  mt-14'>
                <h1 className='text-5xl font-extrabold'>Job Category List</h1>
                <p className='py-4 text-gray-600 font-semibold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='lg:grid grid-cols-4 gap-4 mt-5'>
                {
                    category.map(copycate=><Cate key={copycate.id} cate={copycate}></Cate>)
                }
            </div>
        </div>
    );
};

export default Category;
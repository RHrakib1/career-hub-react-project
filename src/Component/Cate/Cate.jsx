import React from 'react';

const Cate = ({ cate }) => {
    const { logo, category_name, availability } = cate
    return (
        <div className='bg-blue-50 p-7 rounded-md'>
            <img src={logo} alt="" />
            <h2 className='font-extrabold text-xl  py-2'>{category_name}</h2>
            <h2 className='text-gray-600 font-semibold'>{availability}</h2>
        </div>
    );
};

export default Cate;
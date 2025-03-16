import React from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Buttons = () => {
  return (
    <div className='flex justify-between p-2'>
      <button
        className='flex items-center bg-gray-700 text-white w-auto dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg hover:bg-gray-900 dark:hover:bg-gray-200 transition-transform transform hover:scale-105'
      >
        <MdArrowBackIos size={20} /> Previous
      </button>

      <button
        className='flex items-center bg-gray-700 text-white w-auto dark:bg-gray-300 dark:text-black font-semibold rounded-xl p-2 shadow-lg hover:bg-gray-900 dark:hover:bg-gray-200 transition-transform transform hover:scale-105'
      >
        Next <MdArrowForwardIos size={20} />
      </button>
    </div>
  );
};

export default Buttons;

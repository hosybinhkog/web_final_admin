import LayoutAdmin from "@/layouts";
import React from "react";

const Streammer: React.FC = () => {
  return (
    <LayoutAdmin>
      <div className='my-5 mx-5'>
        <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>Manage Customer</h1>
        <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
          Admin Page
        </h3>
        <p className='text-base text-gray-400 mb-2 mt-2'>web - livestream - hutech</p>
      </div>
    </LayoutAdmin>
  );
};

export default Streammer;

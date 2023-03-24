import React from "react";
import { Seo } from "../../components";
import LayoutAdmin from "../../layouts";

const View = () => {
  return (
    <LayoutAdmin>
      <Seo templateTitle='View' />
      <div className='my-5 mx-5'>
        <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>
          View - processing update next time
        </h1>
      </div>
    </LayoutAdmin>
  );
};

export default View;

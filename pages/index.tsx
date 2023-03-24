import { NextPage } from "next";
import { Seo } from "../components";
import LayoutAdmin from "../layouts";

import { QrcodeIcon, ShoppingCartIcon, UserGroupIcon, ViewListIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useAppDispatch } from "../hooks";
import { useEffect } from "react";

const DashBoard: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({});
  }, []);

  return (
    <LayoutAdmin>
      <Seo />
      <div className='my-5 mx-5'>
        <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>Dashboard</h1>
        <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
          Admin Page
        </h3>
        <p className='text-base text-gray-400 mb-2 mt-2'>web - livestream - hutech</p>
      </div>
    </LayoutAdmin>
  );
};

export default DashBoard;

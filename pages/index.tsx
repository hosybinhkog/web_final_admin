import { NextPage } from "next";
import { Loading, Seo, StatusCard } from "../components";
import LayoutAdmin from "../layouts";

import { QrcodeIcon, ShoppingCartIcon, UserGroupIcon, ViewListIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { getDataIndex } from "@/redux/actions/commom.actions";
import { CLEAR_ALL_DATA_ERROR } from "@/constants/redux.contants";
import toast from "react-hot-toast";

const DashBoard: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { error, data, loading } = useAppSelector((state) => state.getAllData);

  useEffect(() => {
    dispatch(getDataIndex());
  }, []);

  useEffect(() => {
    if (error) {
      dispatch({ type: CLEAR_ALL_DATA_ERROR });
      toast.error("Sever đang gặp sự cố !!!1");
      router.push("/500");
    }
  }, [error]);

  return (
    <LayoutAdmin>
      <Seo />
      {loading ? (
        <Loading />
      ) : (
        <div className='my-5 mx-5'>
          <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>Dashboard</h1>
          <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
            Admin Page
          </h3>
          <p className='text-base text-gray-400 mb-2 mt-2'>web - livestream - hutech</p>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-x-4 mt-2'>
            <div className='cursor-pointer' onClick={() => router.push("/dashboard/product")}>
              <StatusCard icon={QrcodeIcon} title='Lives' count={0} />
            </div>
            <div className='cursor-pointer' onClick={() => router.push("/customers")}>
              <StatusCard
                icon={UserGroupIcon}
                title='Customers'
                count={data?.usersCount ? data?.usersCount : 0}
              />
            </div>
            <div className='cursor-pointer' onClick={() => router.push("/categories-stream")}>
              <StatusCard
                icon={ViewListIcon}
                title='Categories Stream'
                count={data?.categoriesStreamCount ? data.categoriesStreamCount : 0}
              />
            </div>

            <div className='cursor-pointer' onClick={() => router.push("/dashboard/category")}>
              <StatusCard
                icon={ShoppingCartIcon}
                title='Types report'
                count={data?.typesReportCount ? data.typesReportCount : 0}
              />
            </div>
            <div className='cursor-pointer' onClick={() => router.push("/dashboard/category")}>
              <StatusCard
                icon={ShoppingCartIcon}
                title='Post'
                count={data?.postCount ? data.postCount : 0}
              />
            </div>
          </div>
        </div>
      )}
    </LayoutAdmin>
  );
};

export default DashBoard;

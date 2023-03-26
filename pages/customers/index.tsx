import avatarDefault from "@/assets/images/avatar-default.gif";
import { Loading, Seo } from "@/components";
import { CLEAR_GET_CUSTOMER_FAILER } from "@/constants/redux.contants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { parseTime } from "@/libs/helper";
import { getCustomer } from "@/redux/actions/user.action";
import { SearchIcon } from "@heroicons/react/outline";
import Pagination from "antd/lib/pagination";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import toast from "react-hot-toast";

const Customers = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { loading, customers, error } = useAppSelector((state) => state.getAllUserReducer);

  const pageSize = 10;
  const currentSize = currentPage === 1 ? 0 : (currentPage - 1) * pageSize;

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_GET_CUSTOMER_FAILER });
      router.push("/");
    }
  }, [error]);

  useEffect(() => {
    dispatch(getCustomer());
  }, []);

  return (
    <>
      <Seo title='Customers' />
      {loading ? (
        <Loading />
      ) : (
        <div className='my-5 mx-5'>
          <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>Manage Customer</h1>
          <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
            Admin Page
          </h3>
          <p className='text-base text-gray-400 mb-2 mt-2'>web - livestream - hutech</p>
          <div className='rounded-lg bg-white py-2 h-[100px] w-full flex  items-center px-[4rem] shadow-md'>
            <form className='flex items-center max-w-[500px] w-full gap-x-1 border border-slate-400 px-4 rounded-2xl'>
              <input
                type='text'
                className='w-full rounded-xl form-input border-transparent focus:border-transparent focus:ring-0 border-none text-sm text-gray-400 '
              />
              <button>
                <SearchIcon className='h-6 w-6 cursor-pointer text-gray-400' />
              </button>
            </form>
          </div>
          <div className='flex flex-col mt-[20px] shadow-md rounded-sm'>
            <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                <div className='overflow-x-auto'>
                  <table className='min-w-full '>
                    <thead className='border-b'>
                      <tr>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                        >
                          #
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                        >
                          Img
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                        >
                          Username
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                        >
                          Email
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                        >
                          Roles
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                        >
                          Login number
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                        >
                          isStreammer
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                        >
                          CreatedAt
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers?.length &&
                        customers
                          ?.slice(currentSize, currentSize + pageSize)
                          .map((item: any, index: number) => (
                            <tr key={item._id} className='border-b rounded-md'>
                              <td className='px-2 py-1 whitespace-nowrap text-md font-medium text-gray-900'>
                                {index + 1}
                              </td>
                              <td className='text-md text-gray-900 font-semibold whitespace-nowrap'>
                                <img
                                  className='h-14 w-14 rounded-full'
                                  src={item?.avatar?.url || item.avatar || avatarDefault.src}
                                  alt=''
                                />
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap max-w-[100px] truncate'>
                                {item?.username}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap max-w-[100px] truncate'>
                                {item?.email}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                {item?.role}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                {item.count_login}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                {item.isStreammer ? "Yes" : "No"}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                {parseTime(item?.createdAt, "")}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                <button
                                  type='button'
                                  className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                                >
                                  Views
                                </button>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                  <div className=' py-2 flex items-center justify-center gap-3'>
                    <Pagination
                      size='default'
                      current={currentSize}
                      pageSize={pageSize}
                      responsive
                      onChange={(e) => setCurrentPage(e)}
                      total={customers?.length || 10}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Customers.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};

export default Customers;

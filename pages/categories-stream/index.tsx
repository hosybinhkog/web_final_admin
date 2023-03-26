import { parseTime } from "@/libs/helper";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Loading, Seo } from "../../components";
import { CLEAR_GET_ALL_CATEGORY_STREAM_FAILURE } from "../../constants/redux.contants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import LayoutAdmin from "../../layouts";
import { getAllCategoryStream } from "../../redux/actions/categoryStream.actions";

const CategoriesStreamPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { loading, categoriesCount, categoriesStream, error } = useAppSelector(
    (state) => state.getAllCategoryStream
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_GET_ALL_CATEGORY_STREAM_FAILURE });
      router.push("/");
    }
  }, [error]);

  useEffect(() => {
    dispatch(getAllCategoryStream());
  }, []);

  return (
    <LayoutAdmin>
      <Seo />
      {loading ? (
        <Loading />
      ) : (
        <div className='my-5 mx-5'>
          <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>Manage categories streamt</h1>
          <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
            Admin Page
          </h3>
          <p className='text-base text-gray-400 mb-2 mt-2'>web - livestream - hutech</p>
          <p className='text-base text-blue-500 mb-2 mt-2 font-extrabold'>
            <span className='font-bold text-gray-900'>Count categories stream : {` `}</span>
            {categoriesCount}
          </p>
          <div className='flex flex-col'>
            <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                <div className='overflow-x-auto'>
                  <table className='min-w-full'>
                    <thead className='border-b'>
                      <tr>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                        >
                          #
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                        >
                          Images
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                        >
                          Title
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                        >
                          Description
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                        >
                          CreatedAt
                        </th>
                        <th
                          scope='col'
                          className='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {categoriesStream?.length > 0 &&
                        categoriesStream
                          // ?.slice(size, size + sizePage)
                          .map((item: any, index: number) => (
                            <tr key={item._id} className='border-b rounded-md'>
                              <td className='px-6 py-4 whitespace-nowrap text-md font-medium text-gray-900'>
                                {index + 1}
                              </td>
                              <td className='text-md text-gray-900 font-semibold whitespace-nowrap'>
                                <img
                                  className='h-[150px] w-[[150px]'
                                  src={item!.thumbnail?.url}
                                  alt=''
                                />
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap max-w-[200px] truncate'>
                                {item?.title}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap max-w-[400px] truncate'>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: item?.description,
                                  }}
                                ></div>
                              </td>

                              <td className='text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap'>
                                {parseTime(item?.createdAt, "")}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-6 py-4 whitespace-nowrap'>
                                <button
                                  type='button'
                                  className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 disabled:opacity-50'
                                  disabled
                                >
                                  Delete
                                </button>
                                <button
                                  onClick={() =>
                                    router.push(`/categories-stream/update/${item?._id}`)
                                  }
                                  type='button'
                                  className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => router.push(`/categories-stream/${item?._id}`)}
                                  type='button'
                                  className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                                >
                                  views
                                </button>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </table>
                  {/* <div className=' py-2 flex items-center justify-center'>
                    <Pagination
                      current={page}
                      onChange={(e) => setPage(e)}
                      pageSize={sizePage}
                      total={categories.length}
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => router.push("/categories-stream/new")}
            className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2'
          >
            Create new
          </button>
        </div>
      )}
    </LayoutAdmin>
  );
};

export default CategoriesStreamPage;

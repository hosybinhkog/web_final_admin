import axiosAdminClient from "@/apis";
import { Loading } from "@/components";
import { CLEAR_GET_ALL_REPORT_STREAM_ERROR } from "@/constants/redux.contants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { parseTime } from "@/libs/helper";
import { getReportsStream } from "@/redux/actions/report-stream.actions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ReportManagePage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { loading, error, reportStreams } = useAppSelector(
    (state) => state.getAllReportStreamducer
  );

  const handleCheck = async (id: string) => {
    try {
      const { data } = await axiosAdminClient.post("/report-stream/check", { id });
      if (data?.success) {
        toast.success("success");
        // @ts-ignore
        dispatch(getReportsStream());
      } else {
        toast.error("update error");
      }
    } catch (error) {
      toast.error("update error");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Có lỗi đã xảy ra!!");
      dispatch({ type: CLEAR_GET_ALL_REPORT_STREAM_ERROR });
      router.push("/");
    }
  }, [error]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getReportsStream());
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <LayoutAdmin>
          <div className='my-5 mx-5'>
            <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>
              Manage reports stream page
            </h1>
            <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
              Admin Page
            </h3>
            <p className='text-base text-gray-400 mb-2 mt-2'>web - hutech - streaming</p>
            <p className='text-base text-gray-400 mb-2 mt-2'>
              Tổng số report: {reportStreams?.length}
            </p>
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
                            title
                          </th>
                          <th
                            scope='col'
                            className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                          >
                            Description
                          </th>
                          <th
                            scope='col'
                            className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                          >
                            idStreammer
                          </th>
                          <th
                            scope='col'
                            className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                          >
                            idCategory
                          </th>
                          <th
                            scope='col'
                            className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                          >
                            idUser
                          </th>{" "}
                          <th
                            scope='col'
                            className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                          >
                            isUser
                          </th>
                          <th
                            scope='col'
                            className='text-sm font-medium text-gray-900 px-2 py-1 text-left'
                          >
                            isCheck
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
                        {reportStreams?.length > 0 ? (
                          reportStreams.map((item: any, index: number) => (
                            <tr key={item._id} className='border-b rounded-md'>
                              <td className='px-2 py-1 whitespace-nowrap text-md font-medium text-gray-900'>
                                {index + 1}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap max-w-[100px] truncate'>
                                {item?.title}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap max-w-[100px] truncate'>
                                {item?.description}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                {item?.idStreammer}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                {item?.idCategory}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                {item?.idUser}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                {item?.isUser}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                {item?.isCheck ? "True" : "false"}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap'>
                                {parseTime(item?.createdAt, "")}
                              </td>
                              <td className='text-md text-gray-900 font-semibold px-2 py-1 whitespace-nowrap flex gap-2'>
                                <button
                                  disabled={item?.isCheck}
                                  onClick={() => handleCheck(item?._id)}
                                  type='button'
                                  className='text-white disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                                >
                                  Check
                                </button>
                                <button
                                  onClick={() => router.push(`/reports-streams/view/${item?._id}`)}
                                  type='button'
                                  className='text-white disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
                                >
                                  View
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <p className='center text-xs my-2 text-red-500'>Hiện không có data</p>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutAdmin>
      )}
    </>
  );
};

export default ReportManagePage;

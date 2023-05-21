import { Loading } from "@/components";
import {
  CLEAR_GET_REPORT_POST_ERROR,
  CLEAR_GET_REPORT_STREAM_ERROR,
} from "@/constants/redux.contants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { getReportPost } from "@/redux/actions/report-post.actions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import axiosAdminClient from "@/apis";
import { getReportStream } from "@/redux/actions/report-stream.actions";

const View = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error, reportStream } = useAppSelector((state) => state.getReportStreamReducer);
  const { id } = router.query;

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
      toast.error(error);
      dispatch({ type: CLEAR_GET_REPORT_STREAM_ERROR });
      router.push("/reports-streams");
    }
  }, [error]);

  useEffect(() => {
    if (id) {
      dispatch(getReportStream(id as string));
    }
  }, [id]);

  return (
    <>
      <LayoutAdmin>
        {loading ? (
          <Loading />
        ) : (
          <div className='my-5 mx-5'>
            <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>
              Manage report stream details : {reportStream?.title}
            </h1>
            <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
              Admin report Page
            </h3>
            <p className='text-base text-gray-400 mb-2 mt-2'>web - hutech - streaming</p>

            <div className='flex gap-3'>
              <button
                onClick={() => router.push("/reports")}
                className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2'
              >
                List reports
              </button>
              <button
                disabled={reportStream?.isCheck}
                onClick={() => handleCheck(reportStream?._id)}
                type='button'
                className='text-white disabled:opacity-50 disabled:cursor-not-allowed bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
              >
                Check
              </button>
            </div>
            <div className='mt-10 flex flex-col gap-2'>
              <h1 className='text-blue-700 text-2xl font-bold'>{reportStream?.title}</h1>
              <div className='text-gray-500 text-[14px]'>
                <span className='font-semibold text-blue-700 text-[14px]'>IsCheck : </span>{" "}
                {reportStream?.isCheck ? "Check" : "Not Check"}
              </div>
              <div className='text-gray-500 text-[14px]'>
                <span className='font-semibold text-blue-700 text-[14px]'>idStreammer : </span>{" "}
                {reportStream?.idStreammer}
              </div>
              <div className='text-gray-500 text-[14px]'>
                <span className='font-semibold text-blue-700 text-[14px]'>AuthorId : </span>{" "}
                {reportStream?.idUser}
              </div>
              <span className='font-semibold text-blue-700 text-[14px]'>Body reportStream </span>{" "}
              <div
                className=''
                dangerouslySetInnerHTML={{ __html: reportStream?.description as string }}
              ></div>
            </div>
          </div>
        )}
      </LayoutAdmin>
    </>
  );
};

export default View;

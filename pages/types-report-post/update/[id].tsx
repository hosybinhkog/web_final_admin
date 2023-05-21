import { getSingleReportType, updateAllReportType } from "@/redux/actions";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { InputAdmin, Loading, QuillEditor } from "../../../components";
import {
  CLEAR_ERROR_GET_REPORT_TYPE,
  CLEAR_ERROR_GET_REPORT_TYPE_POST,
  CLEAR_UPDATE_REPORT_TYPE,
  CLEAR_UPDATE_REPORT_TYPE_POST,
  RESET_UPDATE_REPORT_TYPE,
  RESET_UPDATE_REPORT_TYPE_POST,
} from "../../../constants/redux.contants";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import LayoutAdmin from "../../../layouts";
import {
  getSingleReportTypePost,
  updateAllReportTypePost,
} from "@/redux/actions/type-report-post.action";

const UpdateTypeReport = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const { error, success } = useAppSelector((state) => state.updateReportTypePostReducer);
  const {
    error: errorFetch,
    loading,
    reportTypePost,
  } = useAppSelector((state) => state.getReportTypePostReducer);

  const [title, setTitle] = useState<string>("");

  const handleSubmitCreateNewTypeReportStream = async (e: FormEvent<HTMLFormElement>) => {
    const idLoading = toast.loading("Update post....");
    e.preventDefault();
    // @ts-ignore
    await dispatch(updateAllReportTypePost(id, { typeReport: title }));
    toast.remove(idLoading);
  };

  useEffect(() => {
    if (success) {
      toast.success("update successfully");
      dispatch({ type: RESET_UPDATE_REPORT_TYPE_POST, payload: undefined });
      router.push("/types-report-post");
    }

    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_UPDATE_REPORT_TYPE_POST, payload: undefined });
    }

    if (errorFetch) {
      toast.error(errorFetch);
      dispatch({ type: CLEAR_ERROR_GET_REPORT_TYPE_POST });
    }
  }, [success, error]);

  useEffect(() => {
    if (id) {
      dispatch(getSingleReportTypePost(id as string));
    }
  }, [id]);

  useEffect(() => {
    if (reportTypePost) {
      setTitle(reportTypePost?.typeReport);
    }
  }, [reportTypePost]);

  return (
    <LayoutAdmin>
      <div className='my-5 mx-5'>
        <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>
          Manage Update types - report post
        </h1>
        <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
          Update types - report post
        </h3>
        <p className='text-base text-gray-400 mb-2 mt-2'>web - livestream - hutech</p>
        {loading ? (
          <Loading />
        ) : (
          <form onSubmit={handleSubmitCreateNewTypeReportStream}>
            <div className='grid gap-3 mb-6'>
              <InputAdmin
                name='title'
                placeholder='Title of types report'
                label='Title'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <button
                disabled={!title}
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-slate-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-500'
              >
                Submit
              </button>
            </div>
          </form>
        )}
        <button
          onClick={() => router.push("/types-report-post")}
          className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 '
        >
          Back list
        </button>
      </div>
    </LayoutAdmin>
  );
};

export default UpdateTypeReport;

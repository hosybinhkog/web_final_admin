import axiosAdminClent from "@/apis";
import { Loading } from "@/components";
import { CLEAR_GET_ALL_POST_FAIL, CLEAR_GET_STREAM_ERROR } from "@/constants/redux.contants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { parseTime } from "@/libs/helper";
import { getPosts } from "@/redux/actions";
import { getStream } from "@/redux/actions/streams.actions";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const LiveViewDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();

  const { loading, error, stream } = useAppSelector((state) => state.getStreamReducer);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_GET_STREAM_ERROR });
      router.push("/");
    }
  }, [error]);

  useEffect(() => {
    // @ts-ignore
    dispatch(getStream(id as string));
  }, [id]);

  return (
    <>
      <LayoutAdmin>
        {loading ? (
          <Loading />
        ) : (
          <div className='my-5 mx-5'>
            <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>
              Manage posts details : {stream?.title}
            </h1>
            <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
              Admin Page
            </h3>
            <p className='text-base text-gray-400 mb-2 mt-2'>web - hutech - streaming</p>

            <div className='flex gap-3'>
              <button
                onClick={() => router.push("/posts")}
                className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2'
              >
                List posts
              </button>
              <button className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2'>
                Deleted
              </button>
            </div>
            <div className='mt-10 flex flex-col gap-2'>
              <h1 className='text-blue-700 text-2xl font-bold'>{stream?.title}</h1>
              <div className='text-gray-500 text-[14px]'>
                <span className='text-semibold text-blue-500 text-[14px]'>description : </span>{" "}
                {stream?.descriptionShort}
              </div>
              <div className='text-gray-500 text-[14px]'>
                <span className='font-semibold text-blue-700 text-[14px]'>IsPublish : </span>{" "}
                {stream?.status}
              </div>
              <div className='text-gray-500 text-[14px]'>
                <span className='font-semibold text-blue-700 text-[14px]'>User : </span>{" "}
                {stream?.username}
              </div>
              <div className='text-gray-500 text-[14px]'>
                <span className='font-semibold text-blue-700 text-[14px]'>AuthorId : </span>{" "}
                {stream?.userId}
              </div>
              <span className='font-semibold text-blue-700 text-[14px]'>Body Post </span>{" "}
              <div className='' dangerouslySetInnerHTML={{ __html: stream?.body as string }}></div>
            </div>
          </div>
        )}
      </LayoutAdmin>
    </>
  );
};
export default LiveViewDetail;

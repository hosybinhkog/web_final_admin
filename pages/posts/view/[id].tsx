import { Loading } from "@/components";
import { CLEAR_GET_POST_ERROR } from "@/constants/redux.contants";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "@/layouts";
import { getPost } from "@/redux/actions";
import { useRouter } from "next/router";
import { title } from "process";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const View = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error, post } = useAppSelector((state) => state.PostReducer);
  const { id } = router.query;

  const handleDelete = (id: string) => {};

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_GET_POST_ERROR });
      router.push("/");
    }
  }, [error]);

  useEffect(() => {
    if (id) {
      dispatch(getPost(id as string));
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
              Manage posts details : {post?.title}
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
              <button
                onClick={() => handleDelete(id as string)}
                className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2'
              >
                Deleted
              </button>
            </div>
            <div className='mt-10 flex flex-col gap-2'>
              <h1 className='text-blue-700 text-2xl font-bold'>{post?.title}</h1>
              <div className='text-gray-500 text-[14px]'>
                <span className='text-semibold text-blue-500 text-[14px]'>description : </span>{" "}
                {post?.descriptionShort}
              </div>
              <div className='text-gray-500 text-[14px]'>
                <span className='font-semibold text-blue-700 text-[14px]'>IsPublish : </span>{" "}
                {post?.status}
              </div>
              <div className='text-gray-500 text-[14px]'>
                <span className='font-semibold text-blue-700 text-[14px]'>User : </span>{" "}
                {post?.username}
              </div>
              <div className='text-gray-500 text-[14px]'>
                <span className='font-semibold text-blue-700 text-[14px]'>AuthorId : </span>{" "}
                {post?.userId}
              </div>
              <span className='font-semibold text-blue-700 text-[14px]'>Body Post </span>{" "}
              <div className='' dangerouslySetInnerHTML={{ __html: post?.body as string }}></div>
            </div>
          </div>
        )}
      </LayoutAdmin>
    </>
  );
};

export default View;

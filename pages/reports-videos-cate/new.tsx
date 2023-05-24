import { createNewReportTypeVideoStream } from "@/redux/actions";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { InputAdmin, QuillEditor } from "../../components";
import {
  CLEAR_ERROR_REPORT_TYPE_VIDEO,
  RESET_CREATE_REPORT_TYPE_VIDEO,
} from "../../constants/redux.contants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import LayoutAdmin from "../../layouts";

const NewTypeReportVideoStream = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { error, success } = useAppSelector((state) => state.createReportTypeVideoReducer);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [range, setRange] = useState<number>(1);

  const handleSubmitCreateNewTypeReportStream = async (e: FormEvent<HTMLFormElement>) => {
    const id = toast.loading("Create post....");
    e.preventDefault();
    // @ts-ignore
    await dispatch(createNewReportTypeVideoStream({ title, description, range }));
    toast.remove(id);
  };

  useEffect(() => {
    if (success) {
      toast.success("create type reports successfully");
      dispatch({ type: RESET_CREATE_REPORT_TYPE_VIDEO, payload: undefined });
      router.push("/reports-videos-cate");
    }

    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_ERROR_REPORT_TYPE_VIDEO, payload: undefined });
    }
  }, [success, error]);

  return (
    <LayoutAdmin>
      <div className='my-5 mx-5'>
        <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>
          Manage create types - report - video - stream
        </h1>
        <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
          Create new types - report - video - stream
        </h3>
        <p className='text-base text-gray-400 mb-2 mt-2'>web - livestream - hutech</p>
        <form onSubmit={handleSubmitCreateNewTypeReportStream}>
          <div className='grid gap-3 mb-6'>
            <InputAdmin
              name='title'
              placeholder='Title of types report'
              label='Title'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <InputAdmin
              name='range'
              label='Range'
              value={range}
              type='number'
              onChange={(e) => {
                if (Number(e.target.value) > 0 && Number(e.target.value) < 6) {
                  setRange(Number(e.target.value));
                }
              }}
            />
            <div>
              <label htmlFor=''>Description</label>
              <QuillEditor contentText={description} setContentText={setDescription} />
            </div>
            <button
              disabled={!title || !description || !range}
              type='submit'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-slate-500 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-slate-500'
            >
              Submit
            </button>
          </div>
        </form>
        <button
          onClick={() => router.push("/types-report")}
          className='text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 '
        >
          Back list
        </button>
      </div>
    </LayoutAdmin>
  );
};

export default NewTypeReportVideoStream;

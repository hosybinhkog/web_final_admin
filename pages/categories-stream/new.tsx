import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { InputAdmin, QuillEditor } from "../../components";
import {
  CLEAR_CREATE_CATEGORY_STREAM_ERROR,
  RESET_CREATE_CATEGORY_STREAM,
} from "../../constants/redux.contants";
import { useAppDispatch, useAppSelector } from "../../hooks";
import LayoutAdmin from "../../layouts";
import {
  createCategoryStream,
  getAllCategoryStream,
} from "../../redux/actions/categoryStream.actions";

const CreateNewCategoryStream: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  // @ts-ignore
  const { error, success } = useAppSelector((state) => state.createCategoryStream);
  const { categoriesStream } = useAppSelector((state) => state.getAllCategoryStream);

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [images, setImages] = useState<ArrayBuffer | string>("");
  const [imagesPreview, setImagePreview] = useState<ArrayBuffer | string>("");
  const [categoryStreamId, setCategoryStreamId] = useState<string | undefined>("");

  const handleFormSubmitNewProduct = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = toast.loading("Submiting...");
    const formData = new FormData();
    formData.set("title", title);
    formData.set("description", description);
    formData.append("thumbnail", images as string);
    formData.append("categoryStreamId", categoryStreamId as string);
    await dispatch(createCategoryStream(formData));
    toast.remove(id);
  };

  const handleDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    if (!target.files) return;
    if (e.target.name === "images") {
      const files = target.files[0];

      if (files) {
        const render = new FileReader();

        render.onload = () => {
          if (render.readyState === 2) {
            if (render.result) {
              setImagePreview(render.result);
              setImages(render.result);
            }
          }
        };
        render.readAsDataURL(files);
      }
    }
  };

  const categoriesStreamDataSelect = categoriesStream
    ? categoriesStream.map((item: { title: any; _id: any }) => ({
        name: item.title,
        _id: item._id,
      }))
    : [];

  useEffect(() => {
    if (success) {
      toast.success("create category success!!");
      dispatch({
        type: RESET_CREATE_CATEGORY_STREAM,
        payload: undefined,
      });
      router.push("/categories-stream");
    }

    if (error) {
      toast.error(error);
      dispatch({ type: CLEAR_CREATE_CATEGORY_STREAM_ERROR });
    }
  }, [success, error]);

  useEffect(() => {
    dispatch(getAllCategoryStream());
  }, []);

  return (
    <LayoutAdmin>
      <Head>
        <title>Create Category Stream</title>
      </Head>
      <h5 className='text-2xl font-extrabold text-gray-700'>Create Category Stream page</h5>
      <form onSubmit={handleFormSubmitNewProduct}>
        <div className='grid gap-3 mb-6'>
          <InputAdmin
            name='title'
            label='Name product'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label className='capitalize block mb-2 text-md font-medium text-gray-900'>
              description
            </label>
            <QuillEditor contentText={description} setContentText={setDescription} />
          </div>
          <InputAdmin
            name='images'
            type='file'
            value={images as string}
            onChange={handleDataChange}
            label='Images'
          />
          <InputAdmin
            as='select'
            dataSelect={categoriesStreamDataSelect}
            name='categoryStreamId'
            label='Category Stream id'
            value={categoryStreamId}
            onChange={(e) => setCategoryStreamId(e.target.value)}
          />
          <div className='flex gap-2 items-center justify-center'>
            {imagesPreview && (
              //@ts-ignore
              <img
                className='object-cover w-[400px] h-[300px] rounded-md'
                src={imagesPreview as string}
                alt='Avatar priview'
              />
            )}
          </div>
          <p>{error}</p>
          <button
            disabled={!title || !description || !images}
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-40 disabled:bg-slate-400 disabled:hover:bg-slate-400'
          >
            Submit
          </button>
        </div>
      </form>
    </LayoutAdmin>
  );
};

export default CreateNewCategoryStream;

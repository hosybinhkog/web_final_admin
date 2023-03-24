import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { InputAdmin, Loading, QuillEditor, Seo } from "../../../components";
import {
  CLEAR_GET_CATEGORY_STREAM_FAILURE,
  CLEAR_UPDATE_CATEGORY_STREAM,
  RESET_UPDATE_CATEGORY_STREAM,
} from "../../../constants/redux.contants";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import LayoutAdmin from "../../../layouts";
import {
  getCategoryStreamById,
  updateCategoryStream,
} from "../../../redux/actions/categoryStream.actions";

const UpdateCategoryStream = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { categoryStream, error, loading } = useAppSelector((state) => state.getCategoryStream);
  const { error: errorUpdate, success } = useAppSelector((state) => state.updateCategoryStream);
  const [dataInput, setDataInput] = useState({
    title: categoryStream?.title || "",
    description: categoryStream?.description || "",
  });
  const [images, setImages] = useState<ArrayBuffer | string>("");
  const [imagesPreview, setImagePreview] = useState<ArrayBuffer | string>(
    categoryStream?.thumbnail?.url || ""
  );

  const { title } = dataInput;

  const handleDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    if (target.name === "images") {
      if (!target.files) return;
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
    } else {
      setDataInput({ ...dataInput, [target.name]: target.value });
    }
  };

  const handleFormSubmitUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = toast.loading("Updating...");

    const formData = new FormData();
    formData.set("title", dataInput.title);
    formData.set("description", dataInput.description);
    formData.set("thumbnail", images as string);

    await dispatch(updateCategoryStream(router.query.id as string, formData));
    toast.remove(id);
  };

  useEffect(() => {
    if (success) {
      toast.success("Update sucessfully");
      dispatch({ type: RESET_UPDATE_CATEGORY_STREAM });
      router.push("/categories-stream");
    }
    if (error) {
      router.push("/categories-stream");
      dispatch({ type: CLEAR_GET_CATEGORY_STREAM_FAILURE });
    }

    if (errorUpdate) {
      toast.error(errorUpdate);
      dispatch({ type: CLEAR_UPDATE_CATEGORY_STREAM });
    }
  }, [error, success, errorUpdate]);

  useEffect(() => {
    if (router.query.id) dispatch(getCategoryStreamById(router.query.id as string));
  }, [router.query.id]);

  return (
    <LayoutAdmin>
      <Seo />
      {loading ? (
        <Loading />
      ) : (
        <div className='my-5 mx-5'>
          <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>Manage categories stream</h1>
          <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
            Admin Page || Edit page
          </h3>
          <p className='text-base text-gray-400 mb-2 mt-2'>web - livestream - hutech</p>
          <form onSubmit={handleFormSubmitUpdate}>
            <div className='grid gap-3 mb-6'>
              <InputAdmin
                name='title'
                label='Name product'
                value={title}
                onChange={handleDataChange}
              />
              <div>
                <label className='capitalize block mb-2 text-md font-medium text-gray-900'>
                  description
                </label>
                <QuillEditor
                  contentText={dataInput.description}
                  setContentText={(e) => setDataInput({ ...dataInput, description: e })}
                />
              </div>
              <InputAdmin
                name='images'
                type='file'
                value={images as string}
                onChange={handleDataChange}
                label='Images'
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
                disabled={!dataInput.title || !dataInput.description}
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-40 disabled:bg-slate-400 disabled:hover:bg-slate-400'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </LayoutAdmin>
  );
};

export default UpdateCategoryStream;

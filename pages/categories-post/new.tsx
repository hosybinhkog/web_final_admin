import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { InputAdmin } from "../../components";
import { useAppDispatch, useAppSelector } from "@/hooks";
import LayoutAdmin from "../../layouts";
import { UPDATE_CATEGORY_RESET } from "@/constants/redux.contants";

const CreateNewCategoryPost: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  // @ts-ignore
  const { error, success } = useAppSelector((state) => state.createCategory);

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [images, setImages] = useState<ArrayBuffer | string>("");
  const [imagesPreview, setImagePreview] = useState<ArrayBuffer | string>("");

  const handleFormSubmitNewProduct = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", name);
    formData.set("description", description);
    formData.append("images", images as string);

    dispatch(formData);
  };

  const handleDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    if (!target.files) return;
    const files = Array.from(target.files);

    files.forEach((file) => {
      const render = new FileReader();

      render.onload = () => {
        if (render.readyState === 2) {
          if (render.result) {
            setImagePreview(render.result);
            setImages(render.result);
          }
        }

        render.readAsDataURL(file);
      };
    });
  };

  useEffect(() => {
    if (success) {
      dispatch({
        type: UPDATE_CATEGORY_RESET,
        payload: undefined,
      });
      router.push("/categories-stream");
    }
  }, [success]);

  return (
    <LayoutAdmin>
      <Head>
        <title>Create Category Stream</title>
      </Head>
      <h5 className="text-2xl font-extrabold text-gray-700">Create Category Stream page</h5>
      <form onSubmit={handleFormSubmitNewProduct}>
        <div className="grid gap-3 mb-6">
          <InputAdmin
            name="title"
            label="Name product"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputAdmin
            name="description"
            value={description}
            as="textarea"
            label="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputAdmin
            name="images"
            type="file"
            value={images as string}
            onChange={handleDataChange}
            label="Images"
          />
          <div className="flex gap-2 items-center justify-center">
            {imagesPreview && (
              //@ts-ignore
              <img
                className="object-cover w-[400px] h-[300px] rounded-md"
                src={imagesPreview as string}
                alt="Avatar priview"
              />
            )}
          </div>
          <p>{error}</p>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </LayoutAdmin>
  );
};

export default CreateNewCategoryPost;

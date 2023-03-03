"use client";
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>404 Not found</title>
        <meta name='viewport' content='width=1920, user-scalable=no' />
      </Head>
      <div className='flex flex-col items-center pt-10 bg-white'>
        <div
          className='cursor-pointer max-w-4xl'
          onClick={() => router.push("/")}
        >
          <span className='text-red-600 text-[7rem] font-bold tracking-wider'>
            404 SORRY
          </span>
          <p className='text-gray-400 font-bold text-xl tracking-wide'>
            we couldn't find that page
          </p>
          <p className='text-gray-400 font-bold text-xl tracking-wide'>
            Try searching or go to{" "}
            <span className='text-blue-600 text-xl font-semibold'>
              Go to home page
            </span>
          </p>
        </div>
        <Image
          onClick={() => router.push("/")}
          src='https://t3.ftcdn.net/jpg/03/05/36/02/360_F_305360285_MNRO018E0EHODIhfeIlLT8bQ4MTKzsRB.jpg'
          alt=''
          className='cursor-pointer object-contain max-w-4xl'
        />
      </div>
    </>
  );
};

export default NotFound;

import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const PageServerInternal: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>500 Server Internal</title>
        <meta name='viewport' content='width=1920, user-scalable=no' />
      </Head>
      <div className='flex flex-col items-center pt-10 bg-white'>
        <div
          className='cursor-pointer max-w-4xl'
          onClick={() => router.push("/")}
        >
          <span className='text-red-700 text-[4rem] font-bold tracking-wider uppercase'>
            500 Server Internal
          </span>
          <p className='text-gray-400 font-bold text-xl tracking-wide'>
            Server Internal Page
          </p>
          <p className='text-gray-400 font-bold text-xl tracking-wide'>
            Try searching or go to{" "}
            <span className='text-blue-600 text-xl font-semibold'>
              Back to home page.
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
    </div>
  );
};

export default PageServerInternal;

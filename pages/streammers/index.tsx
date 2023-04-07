import LayoutAdmin from "@/layouts";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Loading } from "@/components";
import { clearErrorGetAllStreammer, getAllStreammer } from "@/redux/actions/streammer.actions";
import toast from "react-hot-toast";

/**
 * @author {HoBinh}
 *
 * */
const Streammer: React.FC = () => {

  const dispatch = useAppDispatch()
  const router = useRouter()
  const { streammers, error, loading} = useAppSelector(state => state.getAllStreammer)

  useEffect(( ) => {
    if(error) {
      toast.error(error)
      dispatch(clearErrorGetAllStreammer())
      router.push('/')
    }
  },[error])

  useEffect(() => {
    dispatch(getAllStreammer())
  },[])

  return (
    <LayoutAdmin>
      <div className='my-5 mx-5'>
        <h1 className='text-3xl font-extrabold text-gray-700 mb-4'>Manage Streammer</h1>
        <h3 className='pl-4 border-4 border-l-gray-400 text-xl font-semibold text-gray-600 '>
          Admin Page
        </h3>
        <p className='text-base text-gray-400 mb-2 mt-2'>web - livestream - hutech</p>
        {loading ? <Loading /> : (
          <div>
            {JSON.stringify(streammers)}
          </div>
        )}
      </div>
    </LayoutAdmin>
  );
};

export default Streammer;

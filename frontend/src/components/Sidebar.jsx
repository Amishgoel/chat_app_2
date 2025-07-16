import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';
const Sidebar = () => {
    const [search, setSearch] = useState("");
    const {otherUsers}=useSelector(store=>store.user);
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const logoutHandler = async () => {
        try{
            const res=await axios.get(`https://chat-app-backend-cod3.onrender.com/api/v1/user/logout`);
            navigate("/login");
            toast.success(res.data.message);
        }
        catch(error){
            console.log(error);
        }
    }
    const searchSubmitHandler = (e)=>{
        e.preventDefault();
        const conversationUser = otherUsers?.find((user)=> user.FullName.toLowerCase().includes(search.toLowerCase()));
        if (conversationUser){
            dispatch(setOtherUsers([conversationUser]));
        }else{
            toast.error("User not found");
        }
    }
    return (
        <div className="border border-amber-400 p-4 flex flex-col">
            <form onSubmit={searchSubmitHandler} className="flex items-center gap-1" action="">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="input input-bordered rounded-md"
                    type="text"
                    placeholder='search...' />
                <button type='submit' className='btn bg-zinc-700 text-white'>
                    <BiSearchAlt2 className="size-[20px] " />
                </button>
            </form>
             <div className="divider divider-warning"></div>
             <OtherUsers/>
             <div className='mt-2'>
                <button onClick={logoutHandler} className="btn btn-sm">LogOut</button>
             </div>
        </div>
    )
}

export default Sidebar

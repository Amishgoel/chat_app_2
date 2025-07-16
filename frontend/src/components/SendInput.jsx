import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from '../redux/messageSlice';
const SendInput = () => {
   
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const {selectedUser} = useSelector(store => store.user);
    const {messages}=useSelector(store => store.message);
    const onSubmitHandler= async (e)=>{

        e.preventDefault();
        try{
           const res= await axios.post(`http://localhost:8080/api/v1/message/send/${selectedUser?._id}`,{message},{
            headers:{
                'Content-Type': 'application/json',

            },
            withCredentials:true
           });
           console.log(res);
           dispatch(setMessages([...messages,res?.data?.newMessage]))
        }
        catch(error){
            console.log(error);
        }
        setMessage("");
    }
    return (
        <form onSubmit={onSubmitHandler} className="p-4 my-4">
            <div className="relative">
                <input
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                    type="text"
                    placeholder='send a message'
                    className="bg-blue-200 my-5 h-10 block border-2 text-black text-center border-amber-500 rounded-3xl w-full" />
                <button type="submit" className='absolute flex text-black inset-y-0 end-0 items-center pr-4'>
                    <IoSend />
                </button>

            </div>

        </form>
    )
}

export default SendInput

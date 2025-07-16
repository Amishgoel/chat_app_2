import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice'
const MessageContainer = () => {
    const { selectedUser, authUser } = useSelector(store => store.user);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => dispatch(setSelectedUser(null))
    }, [])
    return (
        <>
            {
                selectedUser !== null ? (
                    <div className='md:min-w-[450px] flex flex-col '>
                        <div className="flex gap-2 items-center bg-white px-3 py-3">
                            <div className="avatar online">
                                <div className='w-12 rounded-full'>
                                    <img src={selectedUser?.ProfilePhoto} alt="user-profile-photo" />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1">
                                <div className='flex gap-2 justify-between text-black'>
                                    <p>{selectedUser?.FullName}</p>
                                </div>
                            </div>

                        </div>
                        <Messages />
                        <SendInput />
                    </div>
                ) : (
                    <div className="md:min-w-[550px] flex flex-col justify-center items-center">
                        <h1 className='text-4xl text-white font-bold'>Hi,{authUser?.FullName} </h1>
                        
                        <h1 className='text-2xl text-white'>Let's start conversation</h1>
                    </div>
                    
                )
            }
            
        </>

    )
    
}

export default MessageContainer
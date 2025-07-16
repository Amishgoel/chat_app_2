import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';
const OtherUser = ({user}) => {
    const dispatch= useDispatch();
    const {selectedUser}=useSelector(store=>store.user);
   

    const selectedUserHandler=(user)=>{
        dispatch(setSelectedUser(user));
    }
  return (
    <>
      <div onClick={()=>selectedUserHandler(user)} className={`${selectedUser?._id===user?._id?'bg-amber-100 text-black':''} flex gap-2 items-center hover:bg-amber-100 hover:text-black rounded-sm p-2 hover:cursor-pointer`}>
                <div className="avatar online">
                    <div className='w-12 rounded-full '>
                        <img className="bg-lime-100" src={user?.ProfilePhoto} alt="user-profile-photo" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='flex gap-2 justify-between '>
                        <p>{user?.FullName}</p>
                    </div>
                </div>
                <div className="divider divider-warning"></div>
                </div>
    </>
  )
}

export default OtherUser;

import React ,{useEffect, useRef}from 'react'
import { useSelector } from 'react-redux';

const Message = ({message}) => {
     const scroll=useRef();
     const {authUser,selectedUser}=useSelector(store=>store.user);
     useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"})
     },[message])
    return (
       
      <div ref={scroll} className={`chat ${authUser?._id===message.SenderId?'chat-end':'chat-start'}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={message?.SenderId===authUser?._id ? authUser?.ProfilePhoto : selectedUser?.ProfilePhoto}
            />
          </div>
        </div>
        <div className="chat-header">
         
          <time className="text-xs opacity-50 text-yellow-300 font-bold">12:45</time>
        </div>
       
        <div className="chat-bubble bg-amber-400 text-white">{message?.Message}</div>
        <div className="chat-footer opacity-50"></div>
      </div>
      
   
    )
}

export default Message;

import React from 'react'
import Message from './Message';
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from 'react-redux';

const Messages = () => {
    useGetMessages();
    const {messages}=useSelector(store=>store.message);
    if (!messages) return; // early return in react
  return (
    <div className="px-4 flex-1 overflow-auto">{
       messages &&  messages?.map((message)=>{
            return (
                <Message key={message._id} message={message}/>
            )
        })
    }
     
    </div>
  )
}

export default Messages;

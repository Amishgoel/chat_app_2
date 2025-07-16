import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';
const Login = () => {
  const [user, setUser] = useState({

    Username: "",
    Password: "",

  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
   try {
      const res = await axios.post(`https://chat-app-backend-cod3.onrender.com`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true

      });
     
        navigate("/");
       dispatch(setAuthUser(res.data));
      
    }
    catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({

      Username: "",
      Password: "",

    })
  }
  return (
    <div className='w-full  p-6 rounded-lg shadow-md text-black bg-clip-padding backdrop-filter backdrop-blur-md  border border-gray-100'>
      <div>
        <h1 className="text-3xl font-bold text-center ">Login</h1>

        <form onSubmit={onSubmitHandler} action="">

          <div>
            <label className="label p-2">
              <span className='text-base label-text'>User Name</span>
            </label>
            <div><input
              value={user.Username}
              onChange={(e) => setUser({ ...user, Username: e.target.value })}
              className='bg-white rounded-2xl h-10 p-2 w-1/2' type="text" placeholder="Enter Your User Name"></input></div>

          </div>
          <div>
            <label className="label p-2">
              <span className='text-base label-text'>Password</span>
            </label>
            <div><input
              value={user.Password}
              onChange={(e) => setUser({ ...user, Password: e.target.value })}
              className='bg-white rounded-2xl h-10 p-2 w-1/2' type="password" placeholder="Enter Your Password"></input></div>

          </div>




          <p className='text-center my-2'>Don't have an account? <Link to="/register"> Signup </Link></p>
          <div>
            <button type="submit" className='btn btn-block btn-sm mt-2 border border-slate-700'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
const Signup = () => {
  const [user, setUser] = useState({
    FullName: "",
    Username: "",
    Password: "",
    ConfirmPassword: "",
    Gender: ""
  });
  const navigate= useNavigate();
  const handleCheckbox = (Gender) => {
    setUser({ ...user, Gender });
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/user/register`, user, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true

      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    }
    catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      FullName: "",
      Username: "",
      Password: "",
      ConfirmPassword: "",
      Gender: ""
    })
  }
  return (
    <div className='w-full text-black p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
      <div>
        <h1 className="text-3xl font-bold text-center ">Signup</h1>

        <form onSubmit={onSubmitHandler} action="">
          <div>
            <label className="label p-2">
              <span className='text-base label-text'>Full Name</span>
            </label>
            <div><input value={user.FullName}
              onChange={(e) => setUser({ ...user, FullName: e.target.value })}
              className='bg-white rounded-2xl h-10 p-2 w-1/2' type="text" placeholder="Enter Your Full Name"></input></div>

          </div>
          <div>
            <label className="label p-2">
              <span className='text-base label-text'>User Name</span>
            </label>
            <div><input value={user.Username}
              onChange={(e) => setUser({ ...user, Username: e.target.value })}
              className='bg-white rounded-2xl h-10 p-2 w-1/2' type="text" placeholder="Enter Your User Name"></input></div>

          </div>
          <div>
            <label className="label p-2">
              <span className='text-base label-text'>Password</span>
            </label>
            <div><input value={user.Password}
              onChange={(e) => setUser({ ...user, Password: e.target.value })}
              className='bg-white rounded-2xl h-10 p-2 w-1/2' type="password" placeholder="Enter Your Password"></input></div>

          </div>
          <div>
            <label className="label p-2">
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <div><input value={user.ConfirmPassword}
              onChange={(e) => setUser({ ...user, ConfirmPassword: e.target.value })}
              className='bg-white rounded-2xl h-10 p-2 w-1/2' type="password" placeholder="Confirm your Password"></input></div>

          </div>
          <div className='flex gap-2'>
            <div className='flex  items-center gap-2'>
              <p>Male</p>
              <input
                type="checkbox"
                checked={user.Gender === "male"}
                onChange={() => handleCheckbox("male")}
                defaultChecked className="checkbox my-5 text-2xl bg-white " />
            </div>
            <div className='flex items-center gap-2'>
              <p>Female</p>
              <input

                type="checkbox"
                checked={user.Gender === "female"}
                onChange={() => handleCheckbox("female")}
                defaultChecked className="checkbox my-5 text-2xl bg-white  " />
            </div>

          </div>


          <div>
            <p className='text-center my-2'>
              Already have an account? <Link to="/login"> Login </Link>
            </p>
          </div>
          <button type='submit' className='btn btn-block btn-sm mt-2 border border-slate-700'>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup

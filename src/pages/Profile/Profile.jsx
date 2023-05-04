import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { logout } from '../../redux/slice/registerSlice'
import Login from '../Login/Login'
import classes from './profile.module.css'
import logo from "..//..//assets/images/Mem.jpg"

function Profile() {

  const isRegister = useSelector(state => state.register.isRegister)
  const dispatch = useDispatch()
  
  const exitFromProfile = () => {
    dispatch(logout())
  }
  
  
  return (
    <div>
     {isRegister ?( 
       <div className={classes.profile}>
        <div>
            <img src={logo} alt="men" />
        </div>
        <div classes={classes.text}>
            <h1>User profile</h1>
            <h2>You are welcome</h2>
            <p>Register success</p>
            <button onClick={exitFromProfile}>Выйти</button>
        </div>
      </div>) :
      (<Login/>)
    }
  </div>
  );
};

export default Profile;
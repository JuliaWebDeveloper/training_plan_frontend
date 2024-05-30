import { useAuth0 } from '@auth0/auth0-react';
import Login from '../Log/Login';
import Logout from '../Log/Logout';
import Profile from '../Log/Profile';
import Plan from '../Plan/Plan';
import './style.css';
import { useState } from "react";


function Hello() {

  const [ showPlan, setShowPlan ] = useState(false);
  const {isLoading} = useAuth0;
  if(isLoading)
  return 
  <h2>Загрузка...</h2>
  
    return (
      <div className='container-main'>
        <div className='container-log'>
           <Login/>
           <div className='container-log'>
             <Profile/>
             <Logout/>
           </div>
        </div>
        {showPlan ? <Plan/> : 
        <div className='container'>
          <h1>Начни свою персональную тренировку прямо сейчас</h1>
          <button onClick={()=> setShowPlan(true)}>БЫСТРЫЙ СТАРТ</button>
        </div>
        }
      </div>
  )}
  
  export default Hello;

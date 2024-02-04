import React, { useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Bottombar from '../components/bottombar'
import { useCookies } from 'react-cookie'

export default function User() {
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [user, setUser] = useState(cookie.SparkUser ??  "")

  if(user){
    return (
      <div>

          <NavBar/>

          <div className="main_content user">
              <h2 className="green text-center mb-5 fw-bold">User Profile</h2>

              <input type="text" className='text-capitalize' placeholder='Fullname' value={user.fullname}/>
              <input type="text" placeholder='Email' value={user.email}/>
              <input type="text" placeholder='Phone Number' value={user.phone}/>
              <input type="text" placeholder='*******' />
              <div className="text-center">
                <button className="btn">Save Changes</button>
              </div>
          </div>

          <Bottombar/>
          
      </div>
    )
  }else{
    window.location.href = "/login"
  }
}

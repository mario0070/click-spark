import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Bottombar from '../components/bottombar'

export default function User() {
  return (
    <div>

        <NavBar/>

        <div className="main_content user">
            <h2 className="green text-center mb-5 fw-bold">User Profile</h2>

            <input type="text" placeholder='Fullname' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Phone Number' />
            <input type="text" placeholder='Password' />
            <div className="text-center">
              <button className="btn">Save Changes</button>
            </div>
        </div>

        <Bottombar/>
        
    </div>
  )
}

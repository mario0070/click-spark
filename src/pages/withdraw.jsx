import React, { useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Bottombar from '../components/bottombar'
import { useCookies } from 'react-cookie'

export default function Withdraw() {
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [user, setUser] = useState(cookie.SparkUser ??  "")

  if(user){
    return (
      <div>
          <NavBar/>

          <div className="main_content withdraw">
              <div className="box">
                <h6 className="green pt-2 mb-2">CURRENT BALANCE: ₦{user.balance}.00</h6>
                <p className="">You need to have <span className="green">₦20,000.00</span> before you can withdraw your earnings.</p>
              </div>

              <div className="form">
                  <h5 className="text-center green mb-3">Account Details</h5>
                  <input type="text" placeholder='Account Name'/>
                  <input type="text" placeholder='Account Number'/>
                  <input type="text" placeholder='Bank Name'/>
                  <input type="text" placeholder='Amount'/>
                  <button className="btn">Withdraw Earnings</button>
              </div>

              <div className="box mt-5">
                <h6 className="green pt-2 mb-2">Notice!!</h6>
                <p className="">
                  Transactions takes five(5) working days to be dispose into your account, we have many transactions to be handled. <br /> <br />
                  You must add your card to be able to withdraw your earnings, Adding card will deduct ₦30 from your account as card charges <br /> <br />
                  You can continue to perform the task and your earnings will be adding up.
                </p>
              </div>

          </div>

          <Bottombar/>

          <Footer/>
          
      </div>
    )
  }else{
    window.location.href = "/login"
  }
}
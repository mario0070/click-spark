import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { Route, Routes, Link, redirect } from 'react-router-dom'
import Bottombar from '../components/bottombar'
import { useCookies } from 'react-cookie'
import axios from '../utils/axios'

export default function Dashboard() {
  const [cookie, setCookie, removeCookie] = useCookies("")
  const [user, setUser] = useState(cookie.SparkUser ??  "")
  
  const reloadBal = () => {
    const rotate = document.querySelector(".rotate")
    rotate.innerHTML = `<div class="spinner-border text-success spinner-border-sm"></div>`
    
    setTimeout(() => {
      rotate.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`
    },2000)
  }

  if(user){

    useEffect(() => {
      axios.get("/earn",)
      .then(res => {
        res.data.users.forEach(val => {
          if(val.email == user.email){
            setUser(val)
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
    },[user])

    return (
      <div className='dash'>
        <NavBar/>
            <div className="main_content dashboard">
              <div className="section1">
              </div>

              <div className="move">
                <div className="section3">
                    <p className="fw-bold name mb-3 text-capitalize">Hi {user.fullname.split(" ")[1]}</p>
                    <div className="d-flex total justify-content-between">
                      <div className="">
                        <p className="fw-bold mb-2">Total Balance</p>
                        <h2 className="bal fw-bold">₦{user.balance}.00</h2>
                      </div>
                      <div className="icon rotate btn" onClick={reloadBal}>
                        <i class="fa-solid fa-rotate-right"></i>
                      </div>
                    </div>

                    <div className="icons justify-content-evenly mt-4 d-flex">
                      <div className="">
                        <Link to="/task" className="icon btn">
                          <i class="fa-solid fa-money-bill-transfer"></i>
                        </Link>
                        <p className="text-center mt-2 text-sm">Task</p>
                      </div>

                      <div className="">
                        <Link to="/withdraw" className="icon btn">
                          <i class="fa-solid fa-arrow-up"></i>
                        </Link>
                        <p className="text-center mt-2 text-sm">Withdraw</p>
                      </div>

                    <div className="">
                        <Link to="/user-profile" className="icon btn">
                          <i class="fa-solid fa-user"></i>
                        </Link>
                        <p className="text-center mt-2 text-sm">Profile</p>
                    </div>

                    <div className="">
                        <div className="icon btn">
                          <i class="fa-solid fa-arrow-right"></i>
                        </div>
                        <p className="text-center mt-2 text-sm">More</p>
                    </div>
                    </div>

                </div>

                <div className="box">
                    <h2 className="">Task Done</h2>
                    <p className="">{user.taskTotal}</p>                
                </div>

                <div className="box">
                    <h2 className="">Available Task</h2>
                    <p className="mb-2">3000</p>  
                    <Link to='/task' className="btn">See all Available Task <i class="fa-solid fa-arrow-right"></i></Link>              
                </div>

                <div className="box">
                    <h2 className="">Reference Code</h2>
                    <p className="">{user.ref_code ?? "N/A"}</p>
                </div>

                <div className="box">
                    <h2 className="">Reference Link</h2>
                    <p className="code"><a target="_blank" href={window.location.origin + "/signup?ref=" + user.ref_code.split(" ")[1]}>{window.location.origin + "/signup?ref=" + user.ref_code}</a></p>
                  
                </div>

                <div className="box">
                    <h2 className="">References</h2>
                    <h6 className="">{user.total_ref}</h6>
                </div>

                <div className="transact">
                    <h2 className="text-center green">Transaction History</h2>
                    <p className="text-center">Please note that our system detects fake referrals</p>
                    <div className="box mt-3">
                      <p className="text-center text-muted">You don't have any transaction yet!!</p>
                      <div className="d-flex transact_list mt-0 justify-content-between">
                        <p className="mb-0">Amount</p>
                        <p className="mb-0">Account</p>
                        <p className="mb-0">Date</p>
                      </div>
                      <div className="d-flex transact_list justify-content-between">
                        <p className="mb-0">₦3000</p>
                        <p className="mb-0">9138650286</p>
                        <p className="mb-0">29, Aug</p>
                      </div>
                    </div>
                </div>


              </div>
            </div>

            <Bottombar/>

        <Footer/>
      </div>
    )
  }else{
    window.location.href = "/login";
  }
}

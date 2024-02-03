import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import { Route, Routes, Link } from 'react-router-dom'
import Bottombar from '../components/bottombar'

export default function Dashboard() {
  
  const reloadBal = () => {
    const rotate = document.querySelector(".rotate")
    rotate.innerHTML = `<div class="spinner-border text-success spinner-border-sm"></div>`
    
    setTimeout(() => {
      rotate.innerHTML = `<i class="fa-solid fa-rotate-right"></i>`
    },2000)
  }

  return (
    <div className='dash'>
      <NavBar/>
          <div className="main_content dashboard">
            <div className="section1">
            </div>

            <div className="move">
               <div className="section3">
                  <h2 className="fw-bold name mb-3">Hi Ganiu</h2>
                  <div className="d-flex total justify-content-between">
                    <div className="">
                      <h4 className="fw-bold mb-2">Total Balance</h4>
                      <h2 className="bal fw-bold">₦93,000.00</h2>
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
                      <Link to="/" className="icon btn">
                        <i class="fa-brands fa-cc-mastercard"></i>
                      </Link>
                      <p className="text-center mt-2 text-sm">Card</p>
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
                  <h6 className="">0</h6>                
               </div>

               <div className="box">
                  <h2 className="">Available Task</h2>
                  <h6 className="mb-2">3000</h6>  
                  <Link to='/task' className="btn">See all Available Task <i class="fa-solid fa-arrow-right"></i></Link>              
               </div>

               <div className="box">
                  <h2 className="">Reference Code</h2>
                  <h6 className="">PBWHZK207095</h6>
               </div>
               <div className="box">
                  <h2 className="">Reference Link</h2>
                  <h6 className="">https://onlineig.com/register?code=PBWHZK207095</h6>
                
               </div>
               <div className="box">
                  <h2 className="">References</h2>
                  <h6 className="">0</h6>
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

          <div className="floating_window">
            <i class="fa-solid fa-comments"></i>
          </div>

          <Bottombar/>

      <Footer/>
    </div>
  )
}

import React from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Dashboard() {
  return (
    <div>
      <NavBar/>
          <div className="main_content dashboard">
            <div className="section1">
            </div>

            <div className="move">
               <div className="section3">
                  <h2 className="fw-bold name mb-3">Hi Ganiu</h2>
                  <div className="d-flex total justify-content-between">
                    <div className="">
                      <h4 className="fw-bold mb-2 text-muted">Total Balance</h4>
                      <h2 className="bal fw-bold">₦93,000.00</h2>
                    </div>
                    <div className="icon btn">
                      <i class="fa-solid fa-rotate-right"></i>
                    </div>
                  </div>

                  <div className="icons justify-content-evenly mt-4 d-flex">
                    <div className="">
                      <div className="icon btn">
                        <i class="fa-solid fa-money-bill-transfer"></i>
                      </div>
                      <p className="text-center mt-2 text-muted text-sm">Task</p>
                    </div>

                    <div className="">
                      <div className="icon btn">
                        <i class="fa-solid fa-arrow-up"></i>
                      </div>
                      <p className="text-center mt-2 text-muted text-sm">Withdraw</p>
                    </div>

                   <div className="">
                      <div className="icon btn">
                        <i class="fa-brands fa-cc-mastercard"></i>
                      </div>
                      <p className="text-center mt-2 text-muted text-sm">Card</p>
                   </div>

                   <div className="">
                      <div className="icon btn">
                        <i class="fa-solid fa-arrow-right"></i>
                      </div>
                      <p className="text-center mt-2 text-muted text-sm">More</p>
                   </div>
                  </div>

               </div>

               <div className="box">

               </div>
               <div className="box">
                
               </div>
               <div className="box">

               </div>
               <div className="box">
                
               </div>
            </div>
          </div>

      <Footer/>
    </div>
  )
}

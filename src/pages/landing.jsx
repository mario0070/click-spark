import React from 'react'
import "/public/css/style.css"
import NavBar from '../components/navbar'
import Footer from '../components/footer'
// import banner3 from "/img/home-banner3.jpg"

export default function Landing() {
  const showFloat = () => {
    const floating_window = document.querySelector(".floating_window")
    floating_window.classList.toggle("show")
  }

  const removeFloat = () => {
    const floating_window = document.querySelector(".floating_window")
    floating_window.classList.remove("show")
  }

  return (
    <div>

      <NavBar/>

      <div onClick={removeFloat} className="main_content">
          <div className="section1">
            <h2 className="mt-5 fw-bold">Get Paid for Simple Tasks! <div class="spinner-grow text-white"></div></h2>
            <p className="">Earn free cash or gift cards when you perform simple tasks, like, watch short ads,participate in simple online survey,play simple trivia games.</p>
            <a href='/signup' className='btn'>Get Started</a>
          </div>

          <div className="section2">
            <div className="mt-5 text-center desc">
              <h2 className="mt-3 fw-bold">Join millions of <strong className='green'>ClickSpark</strong> Members who have been <strong className='green'>awarded</strong></h2>
              <a href="/signup">Get Started Today <i class="fa-solid fa-arrow-right"></i></a>
            </div>

            <h2 className="fw-bold text-center mt-5 mb-3">How It Works</h2>
            <div className="box">
                <h3 className="fw-bold text-center">Register</h3>
                <div className="text-center"><i class="fa-solid fa-registered"></i></div>
                <p className="">Creating an account is the first and simple step you take into creating financial freedom for yourself.From your account you can monitor your points and see how your money grows.</p>
            </div>
            <div className="box">
                <h3 className="fw-bold text-center">Earn points</h3>
                <div className="text-center"><i class="fa-solid fa-coins"></i></div>
                <p className="">You can easily earn points by doing simple tasks,like watching short ads,spinning dice and other page activities.</p>
            </div>
            <div className="box">
                <h3 className="fw-bold text-center">Redeem</h3>
                <div className="text-center"><i class="fa-solid fa-sack-dollar"></i></div>  
                <p className="">Redeem your Points for Cash,Bitcoin,Amazon gift cards,Itunes gift cards,or 75+ other retail and restaurant partners.</p>            
            </div>
          </div>
      </div>

      <div className="floating_window">
        <i onClick={showFloat} class="fa-solid fa-comments"></i>
      </div>

      <Footer/>
      
    </div>
  )
}

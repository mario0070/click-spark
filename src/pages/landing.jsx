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
    <div className='land'>

      <NavBar/>

      <div onClick={removeFloat} className="main_content">
          <div className="section1">
            <h2 className="mt-5 fw-bold">Get Paid for Simple Tasks! <div class="spinner-grow text-white"></div></h2>
            <p className="">Welcome to Click Spack – a special place where your opinions pay. We offer a wide range of online paid surveys that help you turn your spare time into extra income.</p>
            <a href='/signup' className='btn'>Get Started</a>
          </div>

          <div className="section2">
            <div className="mt-5 text-center desc">
              <h2 className="mt-3 fw-bold">Join <strong className='green'>Click Spark</strong> Today</h2>
              <div className="imgs">
                <img src="https://fortunable.com/wp-content/uploads/2023/09/Transfer-money-quickly-17.jpg" alt="" />
              </div>
              <a href="/signup">Get Started Today <i class="fa-solid fa-arrow-right"></i></a>
            </div>

            <h2 className="fw-bold text-center mt-5 mb-3">Why choose <span className="green">Click Spack</span>?</h2>
            <div className="box">
                <h3 className="fw-bold text-center">FREE MEMBERSHIP</h3>
                <div className="text-center"><i class="fa-solid fa-registered"></i></div>
                <p className="">You will never have to give any money to become our member or keep your account active. At <span className="green">Click Spack</span>, you can earn money for free.</p>
            </div>
            <div className="box">
                <h3 className="fw-bold text-center">REAL MONEY</h3>
                <div className="text-center"><i class="fa-solid fa-coins"></i></div>
                <p className="">For each survey you complete, you will be rewarded with real cash. When you’re ready, you can transfer money right to your Bank account.</p>
            </div>
            <div className="box">
                <h3 className="fw-bold text-center">FUN SURVEYS</h3>
                <div className="text-center"><i class="fa-solid fa-sack-dollar"></i></div>  
                <p className="">Our surveys are simple and fun. There are no right or wrong answers. We just want to hear your opinion about various products and services.</p>            
            </div>

            
            <div className="imgs mb-2"><img src="https://fortunable.com/wp-content/uploads/2023/09/Friends-completing-surveys-21.jpg" alt="" /></div>

            <a href="/login" className='btn mt-3 below_img'>Join Now</a>
            
            <h2 className="fw-bold text-center pt-5 mt-5 mb-3">Who can benefit from <span className="green">Click Spack</span>?</h2>
            <div className="box">
                <h3 className="fw-bold text-center">MAKE MONEY WHILE IN COLLEGE</h3>
                <div className="text-center"><i class="fa-solid fa-coins"></i></div>
                <p className="">As a student, you can easily make money by answering surveys between classes and study sessions. <span className="green">Click Spack</span> provides a flexible way to earn money online without interfering with your studies.</p>
            </div>
            <div className="box">
                <h3 className="fw-bold text-center">MAKE MONEY IN RETIREMENT</h3>
                <div className="text-center"><i class="fa-solid fa-coins"></i></div>
                <p className="">Seniors and retirees often struggle to find suitable money-making opportunities. With <span className="green">Click Spack</span>, retirees can now easily boost their income while enjoying the comforts of home.</p>
            </div>
            <div className="box">
                <h3 className="fw-bold text-center">EARN AS A STAY-AT-HOME PARENT</h3>
                <div className="text-center"><i class="fa-solid fa-coins"></i></div>
                <p className="">Stay-at-home parents can seize the opportunity to earn money in between their daily tasks. Whether it’s during their morning coffee or baby’s naptime, they can now quickly earn some cash.</p>            
            </div>
            <div className="imgs mb-4"><img src="https://fortunable.com/wp-content/uploads/2023/09/pexels-fauxels-3184339-18.jpg" alt="" /></div>

            <div className="box mb-1">
                <h3 className="fw-bold text-center text-uppercase">Fast payout every time</h3>
                <div className="text-center"><i class="fa-solid fa-coins"></i></div>
              <p className=""><span className="green">Click Spack</span> offers an easy way to earn real cash and transfer it right to your online pocket. Each survey you complete on our platform will increase your earnings even more.
Once you reach the payment threshold, you have the flexibility to withdraw your money directly to PayPal or Paysera with just one click. There is also an option to get paid in vouchers and you can even donate your money to a worthy cause. The choice is yours! Whether you want to make money as a student or stay-at-home parent, <span className="green">Click Spack</span> is the place for you.</p>
            </div>
            <a href="/login" className='btn mb-5 mt-3 below_img'>Get Started</a>


          </div>
      </div>

      <div className="floating_window">
        <i onClick={showFloat} class="fa-solid fa-comments"></i>
      </div>

      <Footer/>
      
    </div>
  )
}

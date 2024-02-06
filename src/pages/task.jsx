import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Bottombar from '../components/bottombar'
import { useCookies } from 'react-cookie'

export default function Task() {
    const [test, setTest] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies("")
    const [user, setUser] = useState(cookie.SparkUser ??  "")
    var [countdownNum, setcountdown] = useState(15)

    useEffect(() => {
        setTest([1,2,3,4])

        let countdownValue = 15;
        const countdown = setInterval(function() {
            document.getElementById('timer').textContent = countdownValue;

            countdownValue--;
            if (countdownValue < 0) {
                clearInterval(countdown);
                document.getElementById('timer').textContent = 0;
            }
        }, 1000)
    },[])

    if(user){
        return (
            <div className='all_task'>
                <NavBar/>

                <div className="main_content task">
                   <div className="mt-3">
                        <div className="question">
                            <h4 className="count" id='timer'>{countdownNum}</h4>
                            <h4 className='mt-2'>What is your name?</h4>
                        </div>

                        <div className="mt-5 answer">
                            {
                                test.map((val,index) => {
                                    return (
                                        <div className="answers">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{index + 1}:) jamiu</h6>
                                                <p className="round green"><i class="fa-solid fa-check"></i></p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                           <div className="d-flex">
                                <button className="btn"><i class="fa-solid fa-arrow-left"></i> Previous</button>
                                <button className="btn">Next <i class="fa-solid fa-arrow-right"></i></button>
                           </div>
                        </div>
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

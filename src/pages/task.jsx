import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Bottombar from '../components/bottombar'
import { useCookies } from 'react-cookie'
import Quiz from '../utils/quiz'

export default function Task() {
    const [test, setTest] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies("")
    const [user, setUser] = useState(cookie.SparkUser ??  "")
    var [countdownNum, setcountdown] = useState(15)
    var [steps, setsteps] = useState(1)

    useEffect(() => {
        
    },[])

    const next = () => {
        setsteps(steps + 1)
    }

    const previuos = () => {
        setsteps(steps - 1)
    }

    if(user){
        return (
            <div className='all_task'>
                <NavBar/>

                <div className="main_content task">
                   <div className="mt-3">
                        <Quiz steps={steps} countdownNum={countdownNum} />
                        <div className="d-flex actions">
                            <button className="btn" onClick={previuos}><i class="fa-solid fa-arrow-left"></i> Previous</button>
                            <button className="btn" onClick={next}>Next <i class="fa-solid fa-arrow-right"></i></button>
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

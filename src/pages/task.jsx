import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Bottombar from '../components/bottombar'
import { useCookies } from 'react-cookie'

export default function Task() {
    const [test, setTest] = useState([])
    const [cookie, setCookie, removeCookie] = useCookies("")
    const [user, setUser] = useState(cookie.SparkUser ??  "")

    useEffect(() => {
        setTest([1,2,3,4,5,6,7,9,10])
    },[])

    if(user){
        return (
            <div className='all_task'>
                <NavBar/>

                <div className="main_content task">
                    <div className="transact">
                        <h2 className="text-center green">All Task</h2>
                        <p className="text-center">Please note that our system detects Task that are not completed</p>
                        <div className="box mt-3">
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    test.map(val => {
                                        return (
                                            <tr>
                                                <td>Facebook</td>
                                                <td>₦{val}.00</td>
                                                <td className='action'><a href='/' className='btn'>View task</a></td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                        <div className="continue mt-5">
                            <p className="text-end fw-bold fs-4 green">Continue
                            <i class="fa-solid fa-arrow-right mx-2"></i></p>
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

import React, { useEffect, useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Task() {
    const [test, setTest] = useState([])

    useEffect(() => {
        setTest([1,2,3,4,5,6,7,9,10])
    })

    return (
        <div className='all_task'>
            <NavBar/>

            <div className="main_content task">
                <div className="transact">
                    <h2 className="text-center green">All Task</h2>
                    <p className="text-center text-muted">Please note that our system detects Task that are not completed</p>
                    <div className="box mt-3">
                        <table class="table">
                            <thead>
                            <tr>
                                <th>Task</th>
                                <th>Amount</th>
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
                                            <td className='action'><a href='/' className='btn'>Go</a></td>
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

            <Footer/>
        </div>
    )
}

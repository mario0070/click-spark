import React, { useRef, useState } from 'react'

export default function Forgotpassword() {
    const [email, setEmail] = useState("")
    const userEmail = useRef("")

    return (
        <div className='login d-flex'>
        <div className="img">
        <img src="" alt="" />
        </div>

        <div className="form pb-5">
        <a href="/" className='mb-4 green'><h2 className="text-center mt-5 fw-bold"><i class="fa-solid fa-computer-mouse"></i> Click Spack</h2></a>
        <h4 className="text-center fw-bold">Forgotten Password</h4>
        <p className="mb-0 text-center mt-3 alt">Don't have an account? <a href="/signup" className='mx-2'>Sign up</a></p>

        <div className="inputs mt-5">
            <form action="">
                <div className="text">
                    <input required className='focus' type="text" ref={userEmail} onClick={e => setEmail(e.target.value)} />
                    <p className='move_up'>Email</p>
                </div>
                <div className="text-center">
                    <p className='mb-0'>Password reset link will be send to the email.</p>
                    <button className='btn submitbtn'>Reset Password</button>
                </div>
            </form>
            
        </div>
        </div>
    </div>
    )
}

import React from 'react'

export default function Bottombar() {
  return (
   
    <div className="fixed-bottom d-flex justify-content-evenly">
        <div className="">
        <a href="/" className="icon btn">
            <i class="fa-brands fa-cc-mastercard"></i>
        </a>
        <p className="text-center mb-0 mt-1 text-sm">Card</p>
        </div>

        <div className="">
            <a href="/withdraw" className="icon btn">
            <i class="fa-solid fa-arrow-up"></i>
            </a>
            <p className="text-center mt-1 mb-0 text-sm">Cash</p>
        </div>

        <div className="">
        <a href="/task" className="icon btn">
            <i class="fa-solid fa-money-bill-transfer"></i>
        </a>
        <p className="text-center mb-0 mt-1 text-sm">Task</p>
        </div>
    </div>
  )
}

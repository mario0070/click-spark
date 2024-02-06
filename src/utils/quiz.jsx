import React, { useEffect, useState } from 'react'

export default function Quiz({steps, countdownNum}) {
    const [test, setTest] = useState([])

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

  return (
    <div>
        {steps == 1 &&
            <>
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
                })}            
            </div>
            </>
        }

        {steps == 2 &&
            <>
            <div className="question">
                <h4 className="count" id='timer'>{countdownNum}</h4>
                <h4 className='mt-2'>What is your age?</h4>
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
                })}            
            </div>
            </>
        }
    </div>
  )
}

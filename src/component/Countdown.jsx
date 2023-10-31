import React from 'react'

const Countdown = () => {
    return (
        <div className='flex justify-center mb-[2rem]'>

            <div className="container-segment">
                <div className="segment-title">Hours</div>
                <div className="segment">
                    <div className="flip-card" data-hours-tens>
                        <div className="top">2</div>
                        <div className="bottom">2</div>
                    </div>
                    <div className="flip-card" data-hours-ones>
                        <div className="top">4</div>
                        <div className="bottom">4</div>
                    </div>
                </div>
            </div>
            <div className="container-segment">
                <div className="segment-title">Minutes</div>
                <div className="segment">
                    <div className="flip-card" data-minutes-tens>
                        <div className="top">0</div>
                        <div className="bottom">0</div>
                    </div>
                    <div className="flip-card" data-minutes-ones>
                        <div className="top">0</div>
                        <div className="bottom">0</div>
                    </div>
                </div>
            </div>
            <div className="container-segment">
                <div className="segment-title">Seconds</div>
                <div className="segment">
                    <div className="flip-card" data-seconds-tens>
                        <div className="top">0</div>
                        <div className="bottom">0</div>
                    </div>
                    <div className="flip-card" data-seconds-ones>
                        <div className="top">0</div>
                        <div className="bottom">0</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Countdown
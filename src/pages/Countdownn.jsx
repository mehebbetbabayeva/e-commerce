import React from 'react';
import countimg from "../assets/img/discount.jpg.webp";
import CountdownTimer from './CountdownTimer';




const Countdownn = () => {
  const THREE_DAYS_IN_MS = 30 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  
  return (
    <section id='countdown'>
        <div className="container">
            <div className="countdown-content">
                <div className="countdown-img">
                    <img src={countimg} alt="img" />
                </div>
                <div className="countdown-count">
                    <div className="countdown-title">
                        <div className="title">
                        <h1>discount</h1>
                        <h3>summer 2019</h3>
                        <p>sale <span>50%</span></p>
                        </div>
                    </div>
                    <div className="countdown">
                    <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                    </div>
                    <a href="">shop now</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Countdownn;
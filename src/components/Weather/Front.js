import React from 'react'
import record from '../../Data/data.json'
import '../../Style/Front-style.css'
import Lottie from 'lottie-react'
import animation from '../../Assests/wea.json'
function Front() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:animation,
     };
  return (
    <div className='container'>

   {/* -----------------header----------------------- */}
    <div className='header'>
        <div className='head'>
            <h3>{record.query.results.channel.location.city}
             {" "} City {","}{record.query.results.channel.location.region}{", "}{record.query.results.channel.location.country}</h3>
        </div>
        <div className='temp'>
            <div className='tem-big'>
            <h1>21 ℃</h1>
            </div>
         
         <p>Clear</p>
         <p>Day 30℃.Night 20℃</p>
        </div>
        <div className='anim'>
         <Lottie options={defaultOptions} height={300} width={300} />
      </div>

    </div>
{/* -----------------Footer--------------------------- */}
<div className='footer'>
    <h4>Today's Forecast for New York City, NY, United States</h4>
    <div className='foot-row-container'>

        <div className='morning'>
            <h5>Morning</h5>
            <h4>25℃</h4>
            <img src=''></img>
        </div>

        <div className='aftrenoon'>
            <h5>Afternoon</h5>
            <h4>25℃</h4>
            <img src=''></img>
        </div>

        <div className='evening'>
            <h5>evening</h5>
            <h4>25℃</h4>
            <img src=''></img>
        </div>

        <div className='overnight'>
            <h5>Overnight</h5>
            <h4>25℃</h4>
            <img src=''></img>
        </div>

    </div>

    <button>Next Hours</button>

</div>

    </div>
  )
}

export default Front
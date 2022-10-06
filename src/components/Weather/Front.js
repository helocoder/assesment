import React from 'react'
import record from '../../Data/data.json'
import '../../Style/Front-style.css'
import Lottie from 'lottie-react'
import animation from '../../Assests/mor.json'
import top from '../../Assests/wea.json'
function Front() {
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
     };
  return (
    <div className='container'>

   {/* -----------------header----------------------- */}
    <div className='header'>
        <div className='up-anim'>
        <Lottie animationData={top} loop={true} height={5} width={5}/>
        </div>
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


    </div>
{/* -----------------Footer--------------------------- */}
<div className='footer'>
    <div className='footer-tit'>
    <h4>Today's Forecast for New York City, NY, United States</h4>
    </div>
    <div className='foot-row-container'>

        <div className='morning'>
        <div className='wea-tit'>
            <h5>Morning</h5>
            </div>
            <div className='anim-foot'>
            <Lottie animationData={animation} loop={true} />
            </div>
            <div className='wea-deg'>
            <h4>25℃</h4>
            </div>
        </div>


        <div className='aftrenoon'>
            <div className='wea-tit'>
            <h5>Afternoon</h5>
            </div>
            <div className='anim-foot'>
            <Lottie animationData={animation} loop={true} />
            </div>
            <div className='wea-deg'>
            <h4>25℃</h4>
            </div>
           
        </div>

        <div className='evening'>
        <div className='wea-tit'>
            <h5>Evening</h5>
            </div>
            <div className='anim-foot'>
            <Lottie animationData={animation} loop={true} />
            </div>
            <div className='wea-deg'>
            <h4>25℃</h4>
            </div>
        </div>

        <div className='overnight'>
        <div className='wea-tit'>
            <h5>Overnight</h5>
            </div>
            <div className='anim-foot'>
            <Lottie animationData={animation} loop={true} />
            </div>
            <div className='wea-deg'>
            <h4>25℃</h4>
            </div>
        </div>

    </div>

    <button>Next Hours</button>

</div>

    </div>
  )
}

export default Front
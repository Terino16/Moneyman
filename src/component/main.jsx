import React from 'react'
import Lottie from 'react-lottie';
import chasemoney from '../Animation/Chasemoney.json'
import moneyplant from '../Animation/moneyplant.json'
const Main = () => {
    const Chasemoney = {
        loop: true,
        autoplay: true,
        animationData: chasemoney,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const Moneyplant = {
        loop: true,
        autoplay: true,
        animationData: moneyplant,
       
      };
  return (
    <div>
        <div className='flex  justify-around place-items-center mx-[100px]'>
            <h1 className='font-bold text-5xl'>Everybody in this world is <br/>busy in chasing money<br/></h1>
            <Lottie 
	    options={Chasemoney}
        height={400}
        width={550}
      />
        </div>
        <div className='flex flex-row-reverse justify-around place-items-center mx-[100px]'>
            <h1 className='font-bold text-5xl'>But People who are rich<br/>make money work for them<br/></h1>
            <Lottie 
	    options={Moneyplant}
        height={500}
        width={650}
      />
        </div>
    </div>
  )
}

export default Main
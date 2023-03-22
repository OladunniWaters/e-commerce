import './Hero.scss'

import hero1 from '../assets/hero1.png'

function Hero() {
  
  return (
    <div className="container hero">
     <div className='hero-row'>
     
        <div className='column2'>
               <div className='k60-cont'>
                     <p className='k60'>60K</p>
                     <p className='k60-1'>Holloween Costume</p>
                     <p className='k60-2'>Discover limited sneakers without limitation</p>
               </div>

            
               <div className='heroImage-cont'>
                  <h1 className='hero-h1'>SNEAKERS</h1>
                   <img src={hero1} alt='' className='halloweenImage'/> 
                  <h1 className='hero-h12'>NIKE AIR MAX</h1>
               </div>
             
               <div className='off25-cont'>
                   <p className='off25'>25<sup>%</sup> OFF</p>
                   <p className='off25-1'>Out all-new arrivals</p>
                   <p className='off25-2'>Explore our brand new & unique collection</p>
               </div>

        </div>
        
     </div>
    </div>
  );
}
export default Hero;



import './Hero.scss'
import { FaStarOfLife } from 'react-icons/fa';


import hero1 from '../assets/hero1.png';
import star3 from '../assets/Vector1.png';


function Hero() {
  
  return (
    <div className="container hero">
     <div className='hero-row'>
     <h1 className='hero-h1'>SNEAKERS</h1>
     <div className='StarImage-cont'> 
     
        <div className='column2'>
               <div className='k60-cont'>
                     <p className='k60-3'>#2023</p>
                     <p className='k60'>60K</p>
                     <p className='k60-1'>Limited Edition</p>
                     <p className='k60-2'>Discover the blend of style and comfort now!!!</p>
                     <div className='off-rect1'></div>
               </div>

            
               <div className='heroImage-cont'>
                   <img src={hero1} alt='' className='halloweenImage'/> 
               </div>
             
               <div className='off25-cont'>
                   <p className='off25'>25% OFF</p>
                   <p className='off25-1'>All-new arrivals</p>
                   <div className='off-rect'></div>
                   <p className='off25-2'>Explore our brand new & unique collection</p>
               </div>

        </div>
        
              <img src={star3} alt='' className='StarImage1'/>
              <FaStarOfLife className='StarImage2'/> 
              <img src={star3} alt='' className='StarImage3'/>
              <FaStarOfLife className='StarImage4'/>
        </div>
     </div>
      <h1 className='hero-h12'>NIKE AIR MAX</h1> 
    </div>
  );
}
export default Hero;



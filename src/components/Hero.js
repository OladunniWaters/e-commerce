import './Hero.scss'
import Halloween3 from '../assets/halloween4.png'
import Halloween2 from '../assets/halloween2.png'
import Halloween1 from '../assets/halloween3.png'


function Hero() {
  
  return (
    <div className="container hero">
     <div className='hero-row'>
     
        <div className='column1'>
            <h1 className='hero-h1'>HALLOWEEN</h1>
            <img src={Halloween1} alt='' className='halloweenImage'/> 
            <h1 className='hero-h1'>COLLECTIONS</h1>
        </div>
        
        <div className='column2'>
               <div className='k60-cont'>
                     <p className='k60'>60K</p>
                     <p className='k60-1'>Holloween Costume</p>
                     <p className='k60-2'>Let the Halloween siprit guide you</p>
               </div>

            
               <div className='heroImage-cont'>
                  <img src={Halloween2} alt='' className='halloweenImage2'/> 
               </div>
             
               <div className='off25-cont'>
                   <p className='off25'>25<sup>%</sup> OFF</p>
                   <p className='off25-1'>Out all-new arrivals</p>
                    <img src={Halloween1} alt='' className='halloweenImage3'/> 
                   <p className='off25-2'>Explore our brand new & unique collection</p>
               </div>

        </div>
        
     </div>
    </div>
  );
}
export default Hero;



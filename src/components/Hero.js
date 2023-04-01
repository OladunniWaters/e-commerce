import './Hero.scss'
import { FaStarOfLife } from 'react-icons/fa';
import Sound from 'react-sound'
import  {useState} from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';


import hero1 from '../assets/hero1.png';
import star3 from '../assets/Vector1.png';
import music1 from '../assets/Migos - Walk It Talk It ft. Drake (Instrumental) (Culture 2)(MP3_320K).mp3';



function Hero(handleSongLoading, handleSongPlaying, handleSongFinishedPlaying) {
  const [isPlaying, setIsPlaying] = useState(true)
  
  
  
  return (
    <div className="container hero">
     <div className='hero-row'>
     <h1 className='hero-h1'>SNEAKERS</h1>
     <div className='StarImage-cont'> 
     
          <button className='music-button' onClick={() => setIsPlaying(!isPlaying)}>
               {!isPlaying 
               ?  <div className='play-cont'> <FaTimes className='stop-icon'/> <BsFillCircleFill className='stop-icon'/></div>
               : <div className='play-cont'> <BsFillCircleFill className='stop-icon'/> <div className='icon'><span /> <span /> <span /></div> </div> } 
           </button>
              
               <Sound
                 url={music1}
                 playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                 playFromPosition={300 /* in milliseconds */}
                 autoLoad={true}
                 volume={5}
                 onLoading={handleSongLoading}
                 onPlaying={handleSongPlaying}
                 onFinishedPlaying={handleSongFinishedPlaying}
               />
     
     
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



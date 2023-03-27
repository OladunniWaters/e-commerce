import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import './Item.scss'
import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { TiPlus } from 'react-icons/ti';



function Item({product}) {
  const {id, thumbnail, title, price, category} = product
  const dispatch = useDispatch()
  

    const [loading, setLoading] = useState(false);
    const animate = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3700);
    } 
    


  return (
    <div className="item">
      <div className='item-image-cont'>
        <img
        src={thumbnail}
        alt="item"
        className='item-image'
      />
      </div>
      <p className="item-title">{title}</p>
      <div className="item-info">
        <p className="item-price">${price} </p>

    <button onClick={() => { animate();  dispatch(addToCart({id, title, thumbnail, price}))  }} className = {loading ? `loading` : null}>
    <GoPlus className='plus' />
    <div class="cart">
        <svg viewBox="0 0 36 26">
            <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
            <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
    </div>
  </button>


      </div>      
    </div>
  )
}

export default Item
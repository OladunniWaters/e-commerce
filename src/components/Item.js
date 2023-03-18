//import  { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';

function Item({product}) {
    const {id, thumbnail, title, price, category} = product
  // let navigate = useNavigate();
  const dispatch = useDispatch()

  return (
    <div className="item">
      <div className="item__info">
        <p className="item__title">{title}</p>
        <p className="item__title">{category}</p>
        <p className="item__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img
        src={thumbnail}
        alt="item"
      />
      <button 
        onClick={() => 
          dispatch(addToCart({
            id, title, thumbnail, price
          }))
        }>Add to Cart
      </button>
    </div>
  )
}

export default Item
import './Cart.scss'
import Total from '../components/TotalItem';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';

function Cart() {

  const cart = useSelector((state) => state.cart)

  return (
    <div className="container cart-cont">
      <div className="cart-left">
        <div >
          <h3 className='cart-header'>Your Cart</h3>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price} 
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>

      <div className="cart-right">
        <Total/>
      </div>

    </div>
  )
}

export default Cart
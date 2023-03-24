import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import './Navbar.scss'


function Navbar() {
    const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  
  
  
  
  return (
    <div>
       <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="/homepage">WATERS</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/brands">Brands</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/winter">Winter</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/summer">Summer</a>
              </li>              
             <li class="nav-item">
                <a class="nav-link" href="/sale">Autumn</a>
              </li>
            </ul>
            
            <ul className='profile-cart-cont'>
             <li class="nav-item">
                <a class="profile" href='/dashboard'>Profile</a>
              </li>
              
            <div className='shopping-cart' onClick={() => navigate('/cart')}>
              <p className='cart'>Cart</p>
              <p className='totalQuantity'>{getTotalQuantity() || 0}</p>
            </div>
            </ul>

            
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;



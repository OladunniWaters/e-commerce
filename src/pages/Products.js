import Item from '../components/Item'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BsFillCartFill } from 'react-icons/bs';
import Data from '../data/Data'
import { useState } from "react";


function Products() {

  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  
  
    //filter by category
        const [item, setItem] = useState(Data)
        const filterResult = (catItem) =>{
        const result = Data.filter((curDate) =>{
          return curDate.category === catItem;
        });
        setItem(result)
      }
  
     //filter by Search


     
    

  return (
    <div className="home">
    
           <div>
             <button onClick= {() => filterResult("smartphones")}>smartphones</button>
             <button onClick= {() => filterResult("fragrances")}>fragrances</button>
             <button onClick= {() => filterResult("skincare")}>skincare</button>
             <button onClick={() => setItem(Data)}>All</button>
          </div>
          
     
            <div className="home__container">
              <div className="home__row">
                <div className="recipes">
                         {item ? item.map(product => (
                             <Item
                                product={product}
                                key={product.id} 
                             />
                         )): "No Product Found!"}
                         </div>
              </div>
            </div>
            <div className='shopping-cart' onClick={() => navigate('/cart')}>
              <BsFillCartFill />
              <p>{getTotalQuantity() || 0}</p>
            </div>
          </div>
  )
}

export default Products
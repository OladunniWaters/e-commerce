import './Products.scss'
import Item from '../components/Item'
import Data from '../data/Data'
import { useState } from "react";


function Products() {

  
    //filter by category
        const [item, setItem] = useState(Data)

  

  return (
    <div className="container Products">
                 <h1>BEST SELLERS</h1>
                <div className="products-display">
                         {item ? item.map(product => (
                             <Item
                                product={product}
                                key={product.id} 
                             />
                         )): "No Product Found!"}
                   </div>
        </div>
  )
}

export default Products
import Item from '../components/Item'
import Data from '../data/Data'
import { useState } from "react";
import './CategoryProduct.scss'

function CategoryProduct() {

  
    //filter by category
        const [item, setItem] = useState(Data)
        const filterResult = (catItem) =>{
        const result = Data.filter((curDate) =>{
          return curDate.category === catItem;
        });
        setItem(result)
      }

  return (
    <div className=" categoryProducts">
          <h1 className='category-header'>EXPOLRE COLLECTION</h1>
      
           <div className='category-button-cont'>
             <button className='category-button' onClick= {() => filterResult("smartphones")}>smartphones</button>
             <button className='category-button' onClick= {() => filterResult("fragrances")}>fragrances</button>
             <button className='category-button' onClick= {() => filterResult("skincare")}>skincare</button>
             <button className='category-button' onClick={() => setItem(Data)}>All</button>
          </div>
          
     
             <div className="category-product-display">
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

export default CategoryProduct
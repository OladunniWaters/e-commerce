import Item from '../components/Item'
import Data from '../data/Data'
import { useState } from "react";


function Products() {

  
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
          </div>
  )
}

export default Products
import './Products.scss'
import Item from '../components/Item'
import Data from '../data/Data'


function Products() {



  return (
          <div className=" Products">
             <h1 className='products-header'>BEST SELLERS</h1>
                <div className="products-display">
                         {Data.map(product => (
                             <Item
                                product={product}
                                key={product.id} 
                             />
                         ))}
                   </div>
              </div>
  )
}

export default Products
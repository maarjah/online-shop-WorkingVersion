import React from "react";
import { PRODUCTS } from '../../Products';
import { Product } from './Product';
import './Shop.css';

//logic for the Shop webpage layout 
//and displaying product information
function Shop() {
    return (
        <div className="shop"> 
            <ul className="col-5 col-s-6 products">
                {PRODUCTS.map((product) => (
                    <Product data={product} key={product.id}/>
                ))}

            </ul>           
        </div>
    )
}

export default Shop;
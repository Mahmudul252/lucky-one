import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';


const Product = props => {
    const { id, name, price, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2>Name: {name}</h2>
                <p>Price: ${price}</p>
                <span className='button-container'><button className="button">Add to Cart</button><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></span>

            </div>
        </div>
    );
};

export default Product;
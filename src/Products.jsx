import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBasket } from './Slice/BasketSlice';

const Product = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => { 
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const dispatch=useDispatch()

    const addedBasket=(product)=>{
      dispatch(addBasket(product))
    }
    return (
        <div className='products'>
            
                {data.map((product) => (
                    <p key={product.id}>
                        <img src={product.ProductImage}/>
                        <h4>{product.Name}</h4>
                        <p>{product.Price}</p>
                        <button style={{border:"1px solid black" , backgroundColor:"black" , color:"white" , width:"150px", height:"40px"}} onClick={()=>addedBasket(product)}>Add to Basket</button>
                    </p>
                ))}
            
        </div>
    );
};

export default Product;

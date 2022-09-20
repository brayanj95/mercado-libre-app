import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { FaCarSide } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { setProductDesc } from '../../features/products/productsSlice';
import { useDispatch } from 'react-redux';


function ProductsList() {

    const stateProductsList = useSelector((state) => state.products);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function currencyFormat(num) {
        return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    async function goToProductDesc(product) {
        const response = await axios.get(`http://localhost:3000/api/v1/product/description?id=${product.id}`, {
            headers: {
                "author": "Brayan Jimenez",
            },
            });
        navigate(`/items/id=${product.id}`);
        dispatch(setProductDesc(response.data));
    }
    
    if(stateProductsList.loading) {
        return (
        <div className="container-loader">
            <div className="loader"></div>
        </div>
        )
    } else {
        return (
            <div className="container-list">
                {
                    stateProductsList.items.map((product, index) => {
                        return (
                            <div className="container-product" key={index}>
                                <img
                                    className="image-product"
                                    src={product.picture}
                                    onClick={() => goToProductDesc(product)}
                                    alt="logo" />
                                <div className="desc-product">
                                    <div className="price-product">
                                        <div className="price-product-flex"
                                            onClick={() => goToProductDesc(product)}>{currencyFormat(product.price.amount)} {product.free_shipping
                                            ? <div className="container-free-shipping"><FaCarSide size={10}/></div>
                                            : ''}
                                        </div> 
                                    </div>
                                    <div className="title-product">
                                    <span onClick={() => goToProductDesc(product)}>{product.title}</span>
                                    </div>
                                </div>
                                <div className="address-product">
                                    <small>{product.address}</small>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        );
    }
}

export default ProductsList;


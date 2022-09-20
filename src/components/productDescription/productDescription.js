import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

function ProductDescription() {
    const [detailProduct, setDetailProduct] = useState(0);
    const { id } = useParams();
    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`http://localhost:3000/api/v1/product/description?${id}`, {
                headers: {
                    "author": "Brayan Jimenez",
                },
                });
            setDetailProduct(response.data.items);
            console.log(response.data.items);
          };
          fetchData();
        }, []);

        function currencyFormat(num) {
            return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        }
    return (
        <div className="container-desc-product">
            <div className="product">
                <div className="conatiner-image">
                    <img className="imagen-product" src={detailProduct.picture} alt="imagen-producto" />
                </div>
                <div className="container-all-product">
                    <div className="product-condition">{detailProduct.condition ? 'Nuevo' : 'Usado'} - {detailProduct.sold_quantity} vendidos</div>
                    <p className="product-title">{detailProduct.title}</p>
                    <p className="product-price">{currencyFormat(detailProduct.price.amount)}</p>
                    <button className="buy-button">Comprar</button>
                </div>
            </div>
            <div>
                <p className="desc-product-title">Descripción del producto</p>
                <span className="desc-product-message">{detailProduct.description}</span>
            </div>
        </div>
    )
}

export default ProductDescription;
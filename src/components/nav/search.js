import React, { useState } from 'react';
import axios from 'axios';
import imgLogo from '../../assets/images/logo.png';
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setProductList } from '../../features/products/productsSlice';
import { setLoader } from '../../features/products/productsSlice';
import { useNavigate } from 'react-router-dom';

function Search() {

  const [searchProduct, setSearchProduct] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = event => {
    setSearchProduct(event.target.value);
  }
  
  const handleSubmit = async event => {
    
    event.preventDefault();
    dispatch(setLoader(true));

    const response = await axios.get(`http://localhost:3000/api/v1/products/search?q=${searchProduct}`, {
      headers: {
        "author": "Brayan Jimenez",
      },
    });
    navigate(`/items/search/${searchProduct}`)
    dispatch(setProductList(response.data));
    dispatch(setLoader(false));
  }

  return (
    <div className="nav-search">
      <div className="container-nav">
        <div>
          <img
            className="logo"
            src={imgLogo}
            alt="logo" />
        </div>
        <form className="nav-form" onSubmit={handleSubmit}>
            <input
              className="input-search"
              type="text"
              placeholder="Nunca dejes de buscar"
              onChange={handleChange}
              alt="Busqueda de articulos" />
            <button
              className="button-search"
              disabled={!searchProduct}
              title="Buscar">
              <IoSearchOutline size={70}/>
            </button>
          </form>
      </div>
    </div>
  );
};

export default Search;





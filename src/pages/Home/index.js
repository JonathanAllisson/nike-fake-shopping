import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { MdFavorite } from 'react-icons/md';
import { FaOpencart } from 'react-icons/fa';

import { ListProducts, Container } from './styles';


function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    async function loadProducts(){
      const response = await api.get('products');
      setProducts(response.data);
    }
    loadProducts();
  }, []);


  return (
    <Container>
    <ListProducts>
      { products.map(products => (
        <li key={products.id}>
        <img src={products.image} alt={products.title}/>
        <strong>{products.title}</strong>
        <span>{products.price}</span>
        <div>
          <div className="cart">
            <span>1</span>
            <FaOpencart />
          </div>
          <div className="favorite">
            <MdFavorite color="red" />
          </div>
        </div>
        <button>Adicionar ao carrinho</button>
      </li>
      ))}    
    </ListProducts>
    </Container>
  )
}

export default Home;
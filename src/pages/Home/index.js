import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';

import { MdFavorite } from 'react-icons/md';
import { FaOpencart } from 'react-icons/fa';

import { ListProducts, Container } from './styles';
import { formatPrice } from '../../util/format';


function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() =>{
    async function loadProducts(){
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }))
      setProducts(data);
    }
    loadProducts();
  }, []);

  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    },{})
  );


  return (
    <Container>
      <ListProducts>
        { products.map(product => (
          <li key={product.id}>
          <img src={product.image} alt={product.title}/>
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <div>
            <div className="cart">
              <span>{amount[product.id] || 0}</span>
              <FaOpencart />
            </div>
            <div className="favorite">
              <MdFavorite color="red" />
            </div>
          </div>
          <button onClick={() => dispatch({ type: 'ADD_TO_CART', product })}>Adicionar ao carrinho</button>
        </li>
        ))}    
      </ListProducts>
    </Container>
  )
}

export default Home;
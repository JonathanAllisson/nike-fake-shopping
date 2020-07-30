import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiTwotoneShopping } from 'react-icons/ai'

import { Container, Cart } from './styles';

function Header() {

  const itens  = useSelector(state => {
    return state.cart;
  });

  return (
    <Container>
      <Link to="/">
        <img src={require('../../assets/nike-logo.png')} alt="nike-logo" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{itens.length} itens</span>
        </div>
        <AiTwotoneShopping size={36} color="000"/>
      </Cart>
    </Container>
  )
}

export default Header;
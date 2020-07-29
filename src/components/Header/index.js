import React from 'react';
import { Link } from 'react-router-dom';
import { AiTwotoneShopping } from 'react-icons/ai'

import { Container, Cart } from './styles';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src='https://conteudo.imguol.com.br/c/noticias/69/2017/06/05/logo-da-nike-1496688780234_v2_1920x1359.png' alt="nike" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>1 itens</span>
        </div>
        <AiTwotoneShopping size={36} color="000"/>
      </Cart>
    </Container>
  )
}

export default Header;
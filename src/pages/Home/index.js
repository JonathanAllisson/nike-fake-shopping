import React from 'react';

import { MdFavorite } from 'react-icons/md';
import { FaOpencart } from 'react-icons/fa';

import { ListProducts, Container } from './styles';

function Home() {
  return (
    <Container>
    <ListProducts>
    
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom2.jpg?ts=1569489111&ims=326x" alt="nike"/>
        <strong>Tênis Nike Revolution 5 Masculino</strong>
        <span>R$ 249,99</span>
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
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom2.jpg?ts=1569489111&ims=326x" alt="nike"/>
        <strong>Tênis Nike Revolution 5 Masculino</strong>
        <span>R$ 249,99</span>
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
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom2.jpg?ts=1569489111&ims=326x" alt="nike"/>
        <strong>Tênis Nike Revolution 5 Masculino</strong>
        <span>R$ 249,99</span>
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
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom2.jpg?ts=1569489111&ims=326x" alt="nike"/>
        <strong>Tênis Nike Revolution 5 Masculino</strong>
        <span>R$ 249,99</span>
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
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom2.jpg?ts=1569489111&ims=326x" alt="nike"/>
        <strong>Tênis Nike Revolution 5 Masculino</strong>
        <span>R$ 249,99</span>
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
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/36/HZM-1731-036/HZM-1731-036_zoom2.jpg?ts=1569489111&ims=326x" alt="nike"/>
        <strong>Tênis Nike Revolution 5 Masculino</strong>
        <span>R$ 249,99</span>
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
    </ListProducts>
    </Container>
  )
}

export default Home;
import React from 'react';

import { MdRemoveShoppingCart, MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (
      <Container>
        <ProductTable>
          <thead>
            <tr>
              <th />
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th />
           </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom2.jpg?ts=1569489067&ims=326x" alt="Nike"/>
              </td>

              <td>
                <strong>Tenis nike new era 2.0</strong>
                <span>R$ 249,99</span>
              </td>

              <td>
                <div>
                  <button>
                    <MdRemoveCircleOutline size={20} color="#000" />
                  </button>
                  <input type="number" readOnly value={1} />
                  <button>
                    <MdAddCircleOutline size={20} color="#000" />
                  </button>
                </div>
              </td>

              <td>
                <strong>R$ 249,99</strong>
              </td>
              <td>
                <button>
                  <MdRemoveShoppingCart size={20} color="#000" />
                </button>
              </td>
            </tr>
          </tbody>
        </ProductTable>

        <footer>
          <button>Finalizar compra</button>
            <Total>
              <span>TOTAL</span>
              <strong>R$ 249,99</strong>
            </Total>
        </footer>
      </Container>
  )
}

export default Cart;
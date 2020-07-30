import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdRemoveShoppingCart, MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

import {formatPrice} from '../../util/format';

function Cart() {

  const cart  = useSelector(state => {
    return {
      products: state.cart.map(product => ({
        ...product,
        subtotal: formatPrice(product.price * product.amount),
      })),
      total: formatPrice(state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)),
    }
  })



  const dispatch = useDispatch();

  function increment(product){
    dispatch({
      type: 'UPDATE_AMOUNT',
      id: product.id,
      amount: product.amount + 1,
    })
  }
  
  function decrement(product){
    dispatch({
      type: 'UPDATE_AMOUNT',
      id: product.id,
      amount: product.amount - 1,
    })
  }

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
            { cart.products.map(product => (
              <tr key={product.id}>
                <td>
                  <img src={product.image} alt={product.title}/>
                </td>

                <td>
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                </td>

                <td>
                  <div>
                    <button onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#000" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#000" />
                    </button>
                  </div>
                </td>

                <td>
                  <strong>{product.subtotal}</strong>
                </td>
                <td>
                  <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', id: product.id })}>
                    <MdRemoveShoppingCart size={20} color="#000" />
                  </button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </ProductTable>

        <footer>
          <button>Finalizar compra</button>
            <Total>
              <span>TOTAL</span>
              <strong>{cart.total}</strong>
            </Total>
        </footer>
      </Container>
  )
}

export default Cart;
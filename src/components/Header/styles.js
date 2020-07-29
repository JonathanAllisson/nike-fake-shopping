import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 100%;
  width: 980px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px auto;

  img {
    height: 100px;
    width: 100px;

    &:hover{
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }

    div {
        text-align: right;
        margin-right: 10px;

        strong{
            display: block;
            color: #000;
        }
        span{
            font-size: 12px;
            color: #999;
        }
    }
`;
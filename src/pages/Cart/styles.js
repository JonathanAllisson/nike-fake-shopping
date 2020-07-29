import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;

  footer{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
      background: #000;
      color: #fff;
      border-radius: 5px;
      padding: 12px 8px;
      font-weight: bold;
      text-transform: uppercase;
      transition: 0.2s;

      &:hover{
          opacity: 0.7;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  border: 1px solid #DDD;

  thead th{
    color: #999;
    text-align: left;
    padding: 12px;
  }
  thead td{
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }
  strong{
    color: #333;
    display: block;
  }
  span{
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #DDD;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span{
    color: #999;
    font-weight: bold;
  }
  strong{
    font-size: 28px;
    margin-left: 5px;
  }
`;
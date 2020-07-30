import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
`;


export const ListProducts = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;    
    border: 1px solid #DDD;
    
    img {
        align-self: center;
        max-width: 250px;
    }

    >strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
        align-self: center;
    }

    >span{
        align-self: center;
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
    }

    >div {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        width: 200px;
        margin: 0px auto;

        div {
          padding: 3px 9px;
          border-radius: 10px;
          box-shadow: 1px 1px 1px #aaaaaa;
          display: flex;
          align-items: center;

          span {
              margin-right: 5px;
          }

          svg {
              font-size: 25px;
          }
        }
    }

    button {
      background: #000;
      color: #fff;
      border: 0;
      border-radius: 4px;
      margin-top: auto;
      padding: 12px;
      overflow: hidden;
      margin-top: auto;

      &:hover {
        opacity: 0.7;
      }
    }
  }
  
`;

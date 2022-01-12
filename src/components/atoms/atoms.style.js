import styled from "styled-components";

export const HeaderLogoStyle = styled.div`
  /* height: 100%; */
  color: var(--clr-primary);
  font-weight: 600;
  font-size: 2rem;
  img {
    height: 100%;
    width: auto;
    object-fit: contain;
  }
`;

export const CartLogoStye = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 2rem;
    margin: 1rem;
    width: auto;
    object-fit: contain;
  }
`;

export const SliderProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  div {
    width: 200px;
    height: 200px;
    background-color: #fff0da;
    border-radius: 50%;
    display: grid;
    place-items: center;
    padding: 1.2rem;
    img {
      transform: translateY(5px);
      height: 90%;
      width: 90%;
      object-fit: contain;
    }
  }

  span {
    font-size: 1.2rem;
    font-weight: 500;
    margin-top: 1rem;
  }
`;

export const ProductInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  max-width: 400px;
  width: 100%;
  .name {
    font-size: 1.9rem;
    font-weight: 600;
  }

  .by {
    font-size: 1rem;
    span {
      color: tomato;
    }
  }

  .rating {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    .reviews {
      font-size: 0.9;
      padding-left: 0.4rem;
    }
  }

  .price {
    padding: 1rem 0;
    font-size: 1.4rem;
    font-weight: 500;
  }

  .desc-container {
    padding-top: 1rem;
    font-size: 1rem;
    div {
      border-bottom: 1px solid black;
      width: fit-content;
      margin: 0.4rem 0;
      font-weight: 500;
    }
  }
`;

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

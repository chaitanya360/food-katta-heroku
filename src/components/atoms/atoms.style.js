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

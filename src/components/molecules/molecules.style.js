import styled from "styled-components";

export const HeaderBottomStyle = styled.div`
  position: sticky;
  top: 0;
  height: 3rem;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  div {
    width: fit-content;
    margin: auto;
    height: 100%;
    padding: 1rem 0;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      padding: 0 1.3rem;
      list-style: none;
      transition: all 200ms;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
    }
  }
  .category {
  }
`;

export const HeaderTopStyle = styled.div`
  height: 5rem;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  padding: 0 2rem;

  .auth {
    display: flex;
    div {
      margin: 0 1rem;
      transition: all 200ms;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const SearchBarStyle = styled.div`
  display: flex;
  height: 2.5rem;
  margin: auto;
  /* max-width: 600px; */
  width: 500px;
  input {
    heigth: 100%;
    max-width: 600px;
    width: 100%;
    border-radius: 5px 0 0 5px;
    font-size: 1.1rem;
    border-color: rgba(0, 0, 0, 0.6) !important;
    border-width: 1px;
    padding-left: 1rem;
  }
  .search-icon {
    height: 100%;
    background-color: var(--clr-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    border-radius: 0 5px 5px 0;
  }
`;

export const DropDownMenuStyle = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 1.4rem;

  label {
    padding: 1rem;
    cursor: pointer;
    height: 100%;
    display: grid;
    place-items: center;
    :hover {
      opacity: 0.8;
    }
    img {
      height: 18px;
    }
  }

  .slide {
    left: 0;
    top: 100%;
    clear: both;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.4s ease;
    position: absolute;
    background-color: white;
    box-shadow: none;

    li {
      padding: 1rem 2rem;
      transition: all 200ms;
      cursor: pointer;
      :hover {
        transform: scale(1.2);
      }
      a {
        text-decoration: none;
        color: #2d2f31;
      }
    }
  }

  #touch {
    position: absolute;
    opacity: 0;
    height: 0px;
  }

  #touch:checked + .slide {
    height: 308px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  }
`;

export const ProductCardStyle = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  margin: 1rem;
  margin-bottom: 3rem;
  background: white;
  height: fit-content;
  transition: all 200ms;
  .top {
    display: flex;
    align-items: center;
  }
  .img-wrapper {
    width: 150px;
    height: 100%;
    display: grid;
    place-items: center;
    img {
      width: 150px;
      height: auto;
      object-fit: contain;
    }
  }

  .body {
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 1rem 1rem 0 1rem;
    .category {
      color: #706c67;
      padding: 1rem 0;
    }

    .title {
      font-size: 1.5rem;
      margin: 0.3rem 0;
    }
    .rate {
      margin: 0.3rem 0;
      color: #306c77;
    }

    .buttons {
      /* margin: 2rem 1rem; */
      display: flex;
      align-items: center;
      transition: all 200ms;
      transform: scale(0);
      .btn {
        transition: all 200ms;
        width: 35px;
        height: 35px;
        border-radius: 20%;
        display: grid;
        place-items: center;
        margin: 0.5rem;
        cursor: pointer;
        padding: 8px;

        img {
          height: 100%;
          width: 100%;
          object-fit: contain;
          transform: translateX(1px);
        }

        :hover {
          background: #e1e4232e;
        }
      }
    }
  }

  :hover .buttons {
    transform: scale(1.2);
  }
  :hover {
    /* padding-bottom: 2rem; */
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0px 0px 4px var(--clr-primary);
  }

  :hover .buy-btn {
    height: fit-content;
    padding: 0.6rem 0.4rem;
    border: 2px solid var(--clr-primary);
  }

  .buy-btn {
    transition: 200ms linear;
    position: absolute;
    bottom: 0px;
    transform: translateY(100%);
    left: 0;
    width: 100%;
    background-color: var(--clr-primary);
    color: white;
    font-weight: 500;
    line-height: 20px;
    text-align: center;
    height: 0;
    overflow: hidden;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    :hover {
      opacity: 0.9;
    }
  }
`;

export const ProductViewerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: fit-content;
  .viewer {
    display: flex;
    justify-containt: center;
    height: 500px;
    padding: 3rem;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .fade-out {
    transform: scale(0);
    animation: scale-out 200ms;
  }

  .fade-in {
    animation: scale-in 200ms;
  }

  .img-selector {
    display: flex;
    width: 100%;
    height: fit-content;
    flex-wrap: wrap;
    justify-content: center;
    .thumb {
      width: 100px;
      height: 100px;
      border: 2px solid rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      margin: 1rem;
      padding: 0.4rem;
      cursor: pointer;
      :hover {
        img {
          transform: scale(1.2);
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: all 200ms;
      }
    }
    .selected {
      border-color: var(--clr-primary);
    }
  }
`;

export const ProductQuantitySelectionStyle = styled.div`
  padding: 4rem;
  padding-top: 4rem;
  max-width: 400px;
  width: 100%;
  .title {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .unit-selectors {
    display: flex;
    padding: 1rem 0;
    div {
      transition: all 100ms linear;
    }
    .unit {
      border: 1px solid rgba(0, 0, 0, 0.8);
      padding: 0.2rem 0.4rem;
      margin-right: 1rem;
      width: fit-content;
      cursor: pointer;
    }
    .selected {
      border: 1px solid tomato;
      background-color: rgba(255, 0, 0, 0.2);
    }
  }

  .quantity-selector {
    span {
      margin-right: 1rem;
    }

    select {
      font-size: 1rem;
    }

    option {
      font-size: 1rem;
      width: 20px;
      height: 20px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 1.2rem;
    div {
      width: 100%;
      text-align: center;
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.4);
      color: var(--clr-primary);
      margin-top: 1rem;
      padding: 0.4rem;
    }
    .buy {
      background-color: #ff2525;
      color: white;
    }
  }
`;

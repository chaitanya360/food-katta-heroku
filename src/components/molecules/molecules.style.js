import styled from "styled-components";

export const HeaderBottomStyle = styled.div`
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
  min-height: 5rem;
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

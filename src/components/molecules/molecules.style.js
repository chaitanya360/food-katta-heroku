import styled from "styled-components";

export const HeaderBottomStyle = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  span {
    padding: 1rem;
  }
  .category {
  }
`;

export const HeaderTopStyle = styled.div`
  min-height: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 2rem;

  .auth {
    display: flex;
    div {
      margin: 0 1rem;
    }
  }
`;

export const SearchBarStyle = styled.div`
  display: flex;
  height: 2.5rem;
  margin: auto;
  max-width: 600px;
  width: 100%;
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

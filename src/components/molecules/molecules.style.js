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
  height: 5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const SearchBarStyle = styled.div`
  display: flex;
  height: 3rem;
  margin: auto;
  input {
    width: 600px;
    border-radius: 5px 0 0 5px;
    font-size: 1.5rem;
  }
  .search-icon {
    height: 100%;
    background-color: #e32619;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    border-radius: 0 5px 5px 0;
  }
`;

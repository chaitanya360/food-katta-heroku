import styled from "styled-components";

export const LandingPageStyle = styled.section`
  background-color: red;
`;

export const FormStyle = styled.form`
  height: 100%;
  width: 100%;
  /* max-width: 700px; */
  margin: auto;
  padding: 2rem 0;
  .title {
    font-size: 1.5rem;
    text-align: center;
    background-color: #daf5ff;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  .field {
    max-width: 700px;
    margin: auto;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    .label-wrapper {
      /* background: green; */
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 1rem;
      height: 100%;
    }

    label {
      margin: 0 3rem;
      /* background: red; */
    }

    input {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      /* border-radius: 4px; */
    }

    .error-msg {
      /* display: none; */
      display: block;
      color: red;
      line-height: 2rem;
      padding-left: 1rem;
    }
  }
  .submit-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    .submit-btn {
      max-width: 700px;
      font-size: 1.2rem;
      background-color: #1b8bec;
      color: white;
      padding: 0.4rem 0rem;
      border-radius: 4px;
      border-color: white;
      width: 100%;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .alternative {
    max-width: 700px;
    margin: auto;
  }
`;

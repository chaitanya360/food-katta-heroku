import styled from "styled-components";

export const LandingPageStyle = styled.section`
  .section-title {
    width: fit-content;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    margin: auto;
    border-radius: 4px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    color: rgba(0, 0, 0, 0.8);
    padding: 0.3rem 0.5rem;
  }
`;

export const FormStyle = styled.form`
  padding: 1rem 0;
  height: 100%;
  width: 100%;
  /* max-width: 700px; */

  .form-container {
    max-width: 700px;
    width: 100%;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
  }

  .logo {
    color: var(--clr-primary);
    width: 100%;
    text-align: center;
    padding: 1rem 0;
    font-size: 1.3rem;
  }

  .title {
    font-weight: 500;
    font-size: 1.5rem;
    /* background-color: #daf5ff; */
    padding: 0.5rem 0;
  }

  .sub-title {
    margin-bottom: 1.5rem;
  }

  .fields-wrapper {
    max-width:600px;
    display: grid;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;
    margin: auto;


    .field-bundler{
      display: flex;
      
      .field{
        margin-right: 0.5rem;
      }
    }


  }

  .field {
    max-width: 700px;
    margin: 18px auto;
    width: 100%;
    /* 
    .label-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      padding-top: 1rem;
      height: 100%;
    }

    label {
      margin: 0 3rem;
    } */

    span {
      position: relative;
      img {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        transform: translateY(-8px);
        left: 0.8rem;
      }
    }

    input,textarea {
      padding: 0.5rem 1rem;
      padding-left: 2.5rem;
      padding-right: 0
      font-size: 1rem;
      width: 100%;
      background-color: var(--clr-form-input-bg);
      border-color: transparent;
      border-radius: 0.7rem;
    }

    .error-msg {
      opacity: 0.7;
      font-size:0.9rem;
      position: absolute;
      display: block;
      color: red;
      line-height: 1.8rem;
      background-color: white;
      border-radius: 5px;
      padding: 0 10px;
      width: 100%;
      box-shadow: 0px 1px 2px rgba(0,0,0.1);
      :: before{
        position:absolute;
        display: block;
        content: "";
        width: 0px;
        height: 0px;
        background-color:transparent;
        border: 0.5rem solid transparent;
        border-bottom-color:white;
        top:-0.9rem;
        left: 0px;
      }

      :hover{
        opacity: 1;
      }
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
      background-color: var(--clr-primary);
      color: white;
      padding: 0.4rem 0rem;
      border-radius: 1rem;
      border-color: transparent;
      width: 99%;
      box-shadow: none;
      cursor: pointer;

      :hover {
        opacity: 0.9;
      }
    }
  }
  .alternative {
    width: 100%;
    text-align: center;
    margin: 1rem 0;
    a {
      text-decoration: none;
      color: var(--clr-primary);
      margin-left: 1rem;
    }
  }

  .tnc {
    margin-top: 2rem;
    padding-left: 0.5rem;
    display: flex;
    align-items: center;
    span {
      margin-left: 1rem;
    }
  }

  input[type="checkbox"] {
    cursor: pointer;
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    -moz-appearance: none;
    appearance: none;
    /* For iOS < 15 */
    background-color: #f85220c7;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: transparent;
    width: 1.15em;
    height: 1.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    -webkit-clip-path: polygon(
      14% 44%,
      0 65%,
      50% 100%,
      100% 16%,
      80% 0%,
      43% 62%
    );
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em white;
    /* Windows High Contrast Mode */
    background-color: white;
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }

  input[type="checkbox"]:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
  }
`;

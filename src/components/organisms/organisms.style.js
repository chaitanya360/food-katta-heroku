import styled from "styled-components";

export const HeroSectionStyle = styled.div`
  background: var(--grd-hero-bg);
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;
  place-items: center;

  img {
    height: 60vh;
    width: auto;
    object-fit: contain;
    margin: auto;
  }

  .right-text {
    display: grid;
    place-items: center;
    height: 100%;
    max-width: 500px;
    .title {
      line-height: 90px;
      display: block;
      font-size: 5rem;
      font-weight: 600;
      background-image: var(--grd-hero-title);
    }

    .sub-title {
      line-height: 80px;
      font-size: 5.3rem;
      font-weight: 700;
      background-image: var(--grd-hero-sub-title);
    }

    .text {
      margin: 1rem 0;
      font-wight: 900;
      font-size: 1rem;
      line-height: 23px;
      text-align: center;
    }

    button {
      padding: 0.6rem 2.4rem;
      background: var(--grd-hero-buy-btn-bg);
      color: white;
      font-size: 2rem;
      font-weight: 600;
      border-radius: 40px;
      border-color: transparent;
      margin: 2rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    height: fit-content;
    width: 100%;

    .right-text {
      max-width: 100%;
      padding: 0 2rem;
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    height: fit-content;
    width: 100%;

    img {
      width: 90%;
      height: auto;
    }

    .right-text {
      max-width: 100%;
      padding: 0 1rem;

      .title {
        font-size: 3rem;
        line-height: 50px;
      }

      .sub-title {
        font-size: 4rem;
      }
    }
  }
`;

export const HeaderStyle = styled.header`
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  z-index: 999;
  flex-direction: column;
`;

export const CarouselStyle = styled.section`
  /* height: 70vh; */
  .arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    padding: 1rem;
    user-select: none;
    cursor: pointer;
    img {
      width: 25px;
      height: 25px;
      color: red;
    }
  }

  .next {
    right: 0;
  }
  .prev {
    left: 0;
  }
`;

export const ProductsSliderStyle = styled.section`
  height: fit-content;
  background-color: white;
`;

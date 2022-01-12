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
  padding-top: 2rem;
  .arrow {
    z-index: 3;
    top: 0;
    position: absolute;
    height: 100%;
    width: 20px;
    margin: 1rem;
    display: grid;
    place-items: center;
    img {
      width: 100%;
      height: auto;
    }
  }

  .next {
    right: 0;
  }

  .prev {
    left: 0;
  }
`;

export const BrowseProductsStyle = styled.div`
  padding: 3.4rem 0;
  padding-bottom: 3rem;

  .products {
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FooterStyle = styled.footer`
  width: 100%;
  background-color: #232f3e;
  color: white;

  .top {
    display: flex;
    padding: 5rem 0;
    max-width: 900px;
    margin: auto;
    width: 100%;

    .item-wrapper {
      width: 100%;

      .item-body {
        width: fit-content;
        margin: auto;
      }
      .title {
        font-weight: 600;
        font-size: 1.2rem;
        padding: 1rem 0;
      }

      .item {
        padding: 0.2rem 0;
        font-weight: 100;
      }
    }
  }

  .bottom {
    background-color: #131a22;
    display: flex;
    justify-content: center;
    padding: 0.8rem 0;
    .item {
      margin: 0 2rem;
      padding: 0.8rem;
    }
    span {
      display: inline-block;
      text-align: center;
      background-color: white;
      border-radius: 50%;
      color: black;
      padding: 0.1rem 0.4rem;
      line-height: 20px;
      margin: 0 5px;
    }
  }
`;

export const ProductSectionStyle = styled.section`
  /* display: grid;
  grid-template-columns: 3fr 2fr 2fr; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

import { styled } from "styled-components";


export const MainBannerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 46px;
  width: 100%;
  flex-shrink: 0;
  position: relative;
  z-index: -2;
  opacity: 1;


  & .vector1__main-image {
    position: absolute;
    left: 60%;
    top: 12vh;
    z-index: -1;
    transform: rotate(-161.586deg);
    flex-shrink: 0;
    filter: blur(60px);
  }

  & .vector2__discription-items{
    position: absolute;
    left: 0vw;
    top: 50%;
    z-index: -1;
    flex-shrink: 0;
    filter: blur(60px);
  }

  & .vector3__centralized {
    position: absolute;
    left: 50%;
    top: 15vh;
    z-index: -1;
    flex-shrink: 0;
    transform: rotate(2.216deg);
    filter: blur(60px);
  }

  & .vector4__subtitle {
    position: absolute;
    left: 35%;
    top: 15vh;
    z-index: -1;
    flex-shrink: 0;
    transform: rotate(2.216deg);
    filter: blur(60px);
  }

  & .vector5__main-image-right {
    position: absolute;
    left: 100%;
    top: 10vh;
    z-index: -1;
    flex-shrink: 0;
    transform: rotate(2.216deg);
    filter: blur(60px);
  }

  & .vector6__main-image-down {
    position: absolute;
    left: 100%;
    top: 100%;
    z-index: -1;
    flex-shrink: 0;
    transform: rotate(177.784deg);
    filter: blur(60px);
  }

  & .vector7__header-left {
    position: absolute;
    left: 0%;
    top: 0%;
    z-index: -1;
    flex-shrink: 0;
    transform: rotate(177.784deg);
    filter: blur(60px);
  }

  & .vector8__main-image-under {
    position: absolute;
    left: 75%;
    top: 70%;
    z-index: -1;
    flex-shrink: 0;
    transform: rotate(177.784deg);
    filter: blur(60px);
  }

  & .vector9__central {
    position: absolute;
    left: 40%;
    top: 50%;
    z-index: -1;
    flex-shrink: 0;
    transform: rotate(177.784deg);
    filter: blur(60px);
  }

  & .vector10__title {
    position: absolute;
    left: 35%;
    top: 20%;
    z-index: -1;
    flex-shrink: 0;
    transform: rotate(177.784deg);
    filter: blur(60px);
  }

  & .vector11__left-down {
    position: absolute;
    left: -8%;
    top: 60%;
    z-index: -1;
    flex-shrink: 0;
    transform: rotate(177.784deg);
    filter: blur(60px);
  }

  & .image__positioning-right {
    position: static;
    padding-top: 5.75rem;  
    z-index: 1;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5.875rem;
  padding-bottom: 5.875rem;
  

  gap: 1rem;

  & h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme["base-title"]};
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  & h2 {
    align-self: stretch;
    font-family: 'Roboto',sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`

export const DiscriptiveLayoutContainer = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.25rem 2.5rem;
`

export const DiscriptiveItem = styled.div<{$bgcolor:string}>`
  display: flex;
  align-items: center;
  justify-content: start  ;
  gap: 0.75rem;

  & > .svg__container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: .5rem;
    border-radius: 100%;
    background: ${(props) => props.$bgcolor};

    svg {
      fill: ${(props) => props.theme.white};
    }

  }

  & > .address_description {
    display: flex;
    flex-direction: column;
  }
`
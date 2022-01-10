import styled from "@emotion/styled";

const LocalBackdropJSX = ({ className }) => (
  <div className={className}>
    <div className="slogan">
      <h1 className="slogan__title">Deep Breaths</h1>
      <h3 className="slogan__subtitle">THROUGH YOUR NOSE</h3>
    </div>
    {/* {console.log('[render] LocalBackdrop')} */}
  </div>
);

const LocalBackdrop = styled(LocalBackdropJSX)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-image: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;

  animation-name: flow;
  animation-duration: 15s;
  animation-iteration-count: infinite;
  @keyframes flow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .slogan {
    padding: 1.2rem 2.4rem;
    margin: 10px;
    border: 3px solid rgba(255, 255, 255, 0.7);
    border-radius: 15px;

    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10spx);
  }

  .slogan__title {
    font-size: 4.4rem;
  }

  .slogan__subtitle {
    font-size: 1.6rem;
  }

  /* LAPTOP 1024px */
  @media (min-width: 64em) {
    .slogan {
      padding: 1.6rem 3.2rem;
    }

    .slogan__title {
      font-size: 5.2rem;
    }

    .slogan__subtitle {
      font-size: 1.8rem;
    }
  }
`;

export default LocalBackdrop;

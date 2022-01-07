import styled from "@emotion/styled";

const LocalBackdropJSX = ({ className }) => (
  <div className={className}>
    <div className="slogan">
      <h1 className="slogan__title">FEEL THE BREEZE</h1>
      <h3 className="slogan__subtitle">at your nose</h3>
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
  background-size: 150% 150%;

  animation-name: flow;
  animation-duration: 10s;
  animation-iteration-count: infinite;

  @keyframes flow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .slogan {
  }
`;

export default LocalBackdrop;

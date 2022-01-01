import styled from "@emotion/styled";

const LoaderJSX = ({ className }) => (
  <div className={className}>
    {/* {console.log('[render] Loader')} */}
    <div className="shade"></div>
    <div className="frame">
      <div className="star outer-star">●</div>
      <div className="star inner-star">●</div>
      <div className="star core"></div>
    </div>
  </div>
);

const Loader = styled(LoaderJSX)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 20;

  .shade {
    width: 100%;
    height: 100%;

    background-color: black;
    opacity: 0.7;
  }

  .frame {
    position: absolute;
    height: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 250px;
    border: 3px solid goldenrod;
    border-radius: 25%;

    background-color: black;
    text-align: center;
    line-height: 300px;
    color: goldenrod;
  }

  .star {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 50%;
  }

  /* transform 屬性值套用順序為從右至左，不同順序效果不同 */
  @keyframes orbitting {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .outer-star {
    width: 200px;
    height: 200px;
    border-top: 3px solid goldenrod;
    border-bottom: 3px solid goldenrod;
    z-index: 2;

    animation-name: orbitting;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .inner-star {
    width: 100px;
    height: 100px;
    border-top: 3px solid goldenrod;
    border-bottom: 3px solid goldenrod;
    z-index: 10;

    animation-name: orbitting;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: reverse;
  }

  .core {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 5px solid goldenrod;

    background-color: white;
  }
`;

export default Loader;

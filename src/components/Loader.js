import styled from '@emotion/styled'

const LoaderJSX = ({ className }) => (
  <div className={className}>
    <div id="frame">
      <div className="stars" id="outer">●</div>
      <div className="stars" id="inner">●</div>
      <div className="stars" id="core"></div>
    </div>
  </div>
)

const Loader = styled(LoaderJSX)`
width: 100vw;
height: 100vh;
background-color: black;

#frame {
 position: absolute;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  text-align: center;
  line-height: 300px;
  color: goldenrod;
  border: 3px double goldenrod;
  border-radius: 25%;
}
 

  .stars {
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

  #outer {
    width: 200px;
    height: 200px;
    border-top: 3px double goldenrod;
    border-bottom: 3px double goldenrod;
    animation-name: orbitting;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 2
  }

  #inner {
    border-top: 3px double goldenrod;
    border-bottom: 3px double goldenrod;
    width: 100px;
    height: 100px;
    animation-name: orbitting;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction: reverse;
    z-index: 10;
   }

  #core {
    border-radius: 50%;
    border: 5px double goldenrod;
    background-color: white;
    width: 10px;
    height: 10px;
  }
`

export default Loader
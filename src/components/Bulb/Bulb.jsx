import { useState } from "react";
import off from "../../assets/off.png";
import on from "../../assets/on.png";
import { useGlobalContext } from "../../Context/GlobalContext";
import StopWatch from "../StopWatch/StopWatch";

const Bulb = () => {
  const {isOn, setIsOn} = useGlobalContext()
  const style = `
    .container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .bulb{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px
      width: 200px;
    }
    img{
      height: 200px;
    }
    .switch{
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    button{
      border: none;
      background-color: orangered;
      color: white;
      padding: 7px 15px;
      cursor: pointer;
    }
    button:hover{
      background-color:white;
      color: #333333;
    }
    `;

  const turnOn = () => {
    setIsOn(true);
  };

  const turnOff = () => {
    setIsOn(false);
  };

  return (
    <div className="bg-black">
      <div
        dangerouslySetInnerHTML={{ __html: `<style>${style}</style>` }}
      ></div>
      <div className="container">
        <div>
          <StopWatch/>
        </div>
        <div className="bulb">
          <div id="off" style={{ display: isOn ? "none" : "block" }}>
            <img src={off} alt="" />
          </div>
          <div id="on" style={{ display: isOn ? "block" : "none" }}>
            <img src={on} alt="" />
          </div>
        </div>
        <div className="switch">
          <button
            onClick={turnOff}
            style={{ display: isOn ? "block" : "none" }}
          >
            OFF
          </button>
          <button onClick={turnOn} style={{ display: isOn ? "none" : "block" }}>
            ON
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bulb;

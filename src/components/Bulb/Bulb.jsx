import { useState } from "react";
import off from "../../assets/off.png";
import on from "../../assets/on.png";
import { useGlobalContext } from "../../Context/GlobalContext";
import Button from "../Shared/Button";

const Bulb = () => {
  const { isOn, setIsOn } = useGlobalContext();
  const style = `
    .bulb{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px
      width: 200px;
    }
    img{
      height: 100px;
    }
    .switch{
      
      display: flex;
      
    }
    
    `;

  return (
    <div className={`${isOn ? '' : 'bg-black'}`}>
      <div
        dangerouslySetInnerHTML={{ __html: `<style>${style}</style>` }}
      ></div>
      <div className="container mx-auto px-4 py-5">
        <div className="bulb">
          <div id="off" style={{ display: isOn ? "none" : "block" }}>
            <img src={off} alt="" />
          </div>
          <div id="on" style={{ display: isOn ? "block" : "none" }}>
            <img src={on} alt="" />
          </div>
        </div>
        <div className="switch flex justify-center mt-5">
          <Button
            onClick={() => setIsOn(false)}
            style={{ display: isOn ? "block" : "none" }}
            className='font-semibold text-white'
          >
            LIGHT OFF
          </Button>
          <Button
            onClick={() => setIsOn(true)}
            style={{ display: isOn ? "none" : "block" }}
            className='font-semibold text-white'
          >
            LIGHT ON
          </Button>
          {/* <button
            onClick={() => setIsOn(false)}
            style={{ display: isOn ? 'block' : 'none' }}
          >
            OFF
          </button>
          <button
            onClick={() => setIsOn(true)}
            style={{ display: isOn ? 'none' : 'block' }}
          >
            ON
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Bulb;

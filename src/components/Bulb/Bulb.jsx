import { useState } from "react";
import off from "../../assets/off.png";
import on from "../../assets/on.png";
import { useGlobalContext } from "../../Context/GlobalContext";
import Button from "../Shared/Button";

const Bulb = () => {
  const { isOn, setIsOn } = useGlobalContext();
<<<<<<< HEAD
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
=======

  return (
    <div className={`${!isOn && 'bg-black'} pt-4`}>
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="flex justify-end">
          <div
            className={`inline-flex gap-4 items-center justify-end ${
              isOn && 'bg-primaryBg'
            } p-6 rounded-xl`}
          >
            <div>
              <img
                src={!isOn ? off : on}
                alt=""
                className="h-[150px] w-auto object-cover"
              />
            </div>
            <button
              className="border-0 bg-theme text-white py-2 px-4 rounded hover:bg-primaryBg hover:text-white uppercase font-medium"
              onClick={() => setIsOn((prev) => !prev)}
            >
              {isOn ? 'Off' : 'On'}
            </button>
          </div>
>>>>>>> f1ab3d025c894f0719e7f0b516d62c4a0eee2c90
        </div>
      </div>
    </div>
  );
};

export default Bulb;

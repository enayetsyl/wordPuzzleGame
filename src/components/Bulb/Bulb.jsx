import { useState } from 'react';
import off from '../../assets/off.png';
import on from '../../assets/on.png';
import { useGlobalContext } from '../../Context/GlobalContext';

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

  return (
    <div className="bg-black">
      <div
        dangerouslySetInnerHTML={{ __html: `<style>${style}</style>` }}
      ></div>
      <div className="container mx-auto px-4">
        <div className="bulb">
          <div id="off" style={{ display: isOn ? 'none' : 'block' }}>
            <img src={off} alt="" />
          </div>
          <div id="on" style={{ display: isOn ? 'block' : 'none' }}>
            <img src={on} alt="" />
          </div>
        </div>
        <div className="switch">
          <button
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bulb;

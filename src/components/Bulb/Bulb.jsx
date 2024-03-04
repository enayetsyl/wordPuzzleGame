import { useState } from 'react';
import off from '../../assets/off.png';
import on from '../../assets/on.png';
import { useGlobalContext } from '../../Context/GlobalContext';

const Bulb = () => {
  const { isOn, setIsOn } = useGlobalContext();

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
        </div>
      </div>
    </div>
  );
};

export default Bulb;

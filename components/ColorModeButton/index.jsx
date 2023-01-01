import React from 'react';

function ColorModeButton({ handleClick, value }) {
  return (
    <div onClick={handleClick}>
      <div
        className={`h-[44px] cursor-pointer bg-white bg-opacity-10 mx-4 flex items-center rounded-r-full rounded-l-full transition duration-500 ease-out hover:bg-opacity-30`}
      >
        <div
          className={` flex ${
            value ? 'w-[80px] px-2 ' : 'w-0 px-0'
          } transition-width duration-1000 ease-out overflow-hidden`}
        >
          <div
            className={` w-4 h-4 rounded-full mx-1 ${
              value ? 'opacity-1 rotate-45' : 'opacity-0 rotate-0'
            }  transition duration-150 ease-out`}
            style={{
              background:
                'linear-gradient(to right, #244234 0%, #244234 50%, #fff 50%, #fff 100%)',
            }}
          />
          <div
            className={`w-4 h-4 rounded-full mx-1 ${
              value ? 'opacity-1' : 'opacity-0'
            } transition duration-150 ease-out`}
            style={{
              background:
                'linear-gradient(to right, #52120C 0%, #52120C 50%, #fff 50%, #fff 100%)',
            }}
          />
        </div>
        <div className="text-xs px-3 opacity-1">COLOR MODE</div>
      </div>
    </div>
  );
}

export default ColorModeButton;

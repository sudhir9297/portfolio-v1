function Hamburger({ handleClick, value }) {
  return (
    <div onClick={handleClick}>
      <div className="relative  w-14 h-14 rounded-full bg-white flex flex-col justify-center items-center cursor-pointer transition duration-150 hover:scale-90">
        <span
          className={`absolute w-6 h-px bg-black ${
            value ? '-translate-y-0 rotate-[135deg]' : '-translate-y-1.5'
          } transition duration-500 ease-out`}
        />
        <span
          className={`absolute w-6 h-px bg-black ${
            value ? 'opacity-0' : 'opacity-1'
          } transition duration-500 ease-out`}
        />
        <span
          className={`absolute w-6 h-px bg-black ${
            value ? '-translate-y-0 rotate-[225deg]' : 'translate-y-1.5'
          } transition duration-500 ease-out`}
        />
      </div>
    </div>
  );
}

export default Hamburger;

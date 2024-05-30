const Burger = ({ isOpen }) => {
  return (
    <>
      <div className="w-12 h-6 flex flex-col justify-around items-center cursor-pointer relative">
        <div
          className={`w-6 h-1 rounded-lg bg-gray-950 ${
            isOpen && `transform rotate-45 absolute`
          }`}
        />
        <div
          className={`w-6 h-1 rounded-lg bg-gray-950  ${isOpen && `hidden`}`}
        />
        <div
          className={`w-6 h-1 rounded-lg bg-gray-950  ${
            isOpen && `transform -rotate-45 absolute`
          }`}
        />
      </div>
    </>
  );
};

export default Burger;

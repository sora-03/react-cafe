const Image = () => {
  return (
    <>
      <div className="w-full relative">
        <img
          className="w-full h-80 object-cover"
          src="../../public/images/road.jpg"
          alt="autumn"
        />
        <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl text-white">
          豊かな自然を目の前で
        </p>
      </div>
    </>
  );
};

export default Image;

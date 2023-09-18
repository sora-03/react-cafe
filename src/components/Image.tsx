const Image = () => {
  return (
    <>
      <div className="w-full relative mt-4">
        <img
          className="w-full h-80 object-cover"
          src="../../public/images/road.jpg"
          alt="autumn"
        />
        <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl text-center text-white">
          豊かな自然を目の前で
        </p>
      </div>
    </>
  );
};

export default Image;

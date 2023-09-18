const Description = () => {
  return (
    <div className="block md:flex">
      <div className="text-center mt-16 w-full md:w-2/3">
        <h1 className="text-4xl mb-12">Welcome</h1>
        <h2 className="text-2xl mb-10">【squirrel】</h2>
        <p className="leading-10">
          自然豊かな環境で、ゆったりとお食事を楽しんでいただける場所。
          <br />
          新鮮な食材を使用した料理を提供し、
          <br />
          心地よい自然の中でくつろいでいただけます。
          <br />
          季節ごとに変わる美しい景色と共に、
          <br />
          特別なひとときをお楽しみください。
          <br />
          リラックスした雰囲気の中で、
          <br />
          美味しい料理を味わいながら贅沢なひとときをお過ごしください。
        </p>
      </div>
      <div className="flex items-center justify-center w-full md:w-1/3">
        <img
          src="../../public/images/cooking.jpg"
          alt="cooking"
          className="h-96 object-cover"
        />
      </div>
    </div>
  );
};

export default Description;

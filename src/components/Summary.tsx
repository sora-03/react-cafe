const Summary = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-2xl">squirrel</h1>
      <img
        src="../../public/images/dish.jpg"
        alt="dish"
        className="w-48 inline-block"
      />
      <div>
        <p className="mb-2">〒000-0000 XX県YYY市ZZZZ一丁目1-1</p>
        <p className="mb-2">TEL 000-0000-0000</p>
        <p className="mb-2">
          ランチタイム 11:00~15:00(L.O.14:30)
          <br />
          ディナータイム 17:00~21:00(最終入店：19:30)
          <br />
        </p>
        <p className="mb-2">定休日：毎週水曜日</p>
        <p>駐車場：10台</p>
      </div>
    </div>
  );
};

export default Summary;

const Header = () => {
  return (
    <header>
      <div className="flex justify-center">
        <img src="../../public/home.svg" alt="リス" />
      </div>
      <p className="flex justify-center text-yellow-300">
        緑豊かななく浮かんで心満ちる時間を
      </p>
      <nav className="text-center mt-4">
        <ul className="m-0 p-0">
          <li className="inline-block w-24 hover:border-b-2 hover:border-yellow-300">
            <a href="#" className="text-green-900">HOME</a>
          </li>
          <li className="inline-block w-24 hover:border-b-2 hover:border-yellow-300">
            <a href="#" className="text-green-900">お知らせ</a>
          </li>
          <li className="inline-block w-24 hover:border-b-2 hover:border-yellow-300">
            <a href="#" className="text-green-900">メニュー</a>
          </li>
          <li className="inline-block w-24 hover:border-b-2 hover:border-yellow-300">
            <a href="#" className="text-green-900">カレンダー</a>
          </li>
          <li className="inline-block w-24 hover:border-b-2 hover:border-yellow-300">
            <a href="#" className="text-green-900">店舗情報</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

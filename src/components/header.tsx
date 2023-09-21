const Header = () => {
  return (
    <header className="sticky">
      <div className="flex justify-center">
        <img src="../../public/images/home.svg" alt="リス" className="w-24" />
      </div>
      <p className="flex justify-center text-sm text-yellow-300">
        緑豊かななく浮かんで心満ちる時間を
      </p>
      <nav className="text-center mt-4 hidden md:block">
        <ul className="m-0 p-0">
          <li className="inline-block w-28 hover:border-b-2 hover:border-yellow-300 hover:bg-yellow-50">
            <a href="#">HOME</a>
          </li>
          <li className="inline-block w-28 hover:border-b-2 hover:border-yellow-300 hover:bg-yellow-50">
            <a href="#">お知らせ</a>
          </li>
          <li className="inline-block w-28 hover:border-b-2 hover:border-yellow-300 hover:bg-yellow-50">
            <a href="#">メニュー</a>
          </li>
          <li className="inline-block w-28 hover:border-b-2 hover:border-yellow-300 hover:bg-yellow-50">
            <a href="#">カレンダー</a>
          </li>
          <li className="inline-block w-28 hover:border-b-2 hover:border-yellow-300 hover:bg-yellow-50">
            <a href="#">店舗情報</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

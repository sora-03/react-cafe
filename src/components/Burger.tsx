import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../css/burger.css";

class Burger extends React.Component {
  showSetting(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    event.preventDefault();
  }

  render() {
    return (
      <div id="outer-container" className="md:hidden">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <main id="page-wrap">
            <a id="home" className="menu-item" href="/">
              Home
            </a>
            <a id="about" className="menu-item" href="/">
              お知らせ
            </a>
            <a id="contact" className="menu-item" href="/">
              メニュー
            </a>
            <a id="calender" className="menu-item" href="/">
              カレンダー
            </a>
            <a id="info" className="menu-item" href="/">
              店舗情報
            </a>
          </main>
        </Menu>
      </div>
    );
  }
}
export default Burger;

import { BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { SocialMedia, SocialMediaButton } from "../SocialMedia/SocialMedia";
import { useEffect } from "react";
import classNames from "classnames"
import logo from "image/logo.webp";
import { globalStore } from "store/stateGlobal"

const Header = () => {
  const { onSidebarToggle, statusLive, isOpenSidebar } = globalStore()

  const statusAnimation = classNames("logo-container", {
    "logo-container__animation": statusLive,
  });

  useEffect(() => {
    isOpenSidebar
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [isOpenSidebar]);

  return (
    <header className="header">
      <div className="header__container" >
        <div className="header__container-main">
          <div className={`logo-container ${statusAnimation}`}>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <SocialMediaButton
            icon={<GiHamburgerMenu />}
            action={() => onSidebarToggle(true)}
          />
        </div>
        <div className="header__container-social">
          <SocialMedia
            icon={<BsTwitter />}
            href="https://twitter.com/jonhyphenom"
          />
          <SocialMedia
            icon={<BsInstagram />}
            href="https://twitter.com/jonhyphenom"
          />
          <SocialMedia
            icon={<BsTwitch />}
            href="https://twitter.com/jonhyphenom"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

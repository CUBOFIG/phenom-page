import { useEffect } from "react";
import { HeaderPrincipalElemment } from "./Header.elements";
import { useSelector, useDispatch } from "react-redux";
import { BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { SocialMedia, SocialMediaButton } from "../SocialMedia/SocialMedia";
import logo from "../../image/logo.jpg";
import { toggle } from "../../features/live/liveSlices";
import { getDataLive } from "features/live/liveSlices";

const Header = () => {
  const stateLive = useSelector((state) => state.live);

  const dispatch = useDispatch();
  const sidebarToggle = (state) => dispatch(toggle(state));

  useEffect(() => {
    stateLive.isOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [stateLive.isOpen]);

  useEffect(() => {
    dispatch(getDataLive());
  }, [dispatch]);

  return (
    <header className="header">
      <HeaderPrincipalElemment
        active={stateLive.currentStatus}
        className="header__container"
      >
        <div className="header__container-main">
          <div className="logos-container">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <SocialMediaButton
            icon={<GiHamburgerMenu />}
            action={() => sidebarToggle(true)}
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
      </HeaderPrincipalElemment>
    </header>
  );
};

export default Header;

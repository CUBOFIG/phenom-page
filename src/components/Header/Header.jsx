import { BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";
import { getDataLive } from "features/live/liveSlices"; 
import { GiHamburgerMenu } from "react-icons/gi";
import { SocialMedia, SocialMediaButton } from "../SocialMedia/SocialMedia";
import { toggle } from "../../features/live/liveSlices";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames"
import logo from "image/logo.webp";

const Header = () => {
  const stateLive = useSelector((state) => state.live);
  const dispatch = useDispatch();
  const sidebarToggle = (state) => dispatch(toggle(state));

  const statusAnimation = classNames("logo-container", {
    "logo-container__animation": stateLive.currentStatus,
  });

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
      <div className="header__container" >
        <div className="header__container-main">
          <div className={`logo-container ${statusAnimation}`}>
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
      </div>
    </header>
  );
};

export default Header;

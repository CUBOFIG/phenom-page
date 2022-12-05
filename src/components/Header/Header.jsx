import React from "react";
import {
  HeaderContainer,
  HeaderPrincipalElemment,
  SocialMediaContainer,
  Logo,
} from "./Header.elements";
import { useSelector, useDispatch } from "react-redux";
import { BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { SocialMedia, SocialMediaButton } from "../SocialMedia/SocialMedia";
import logo from "../../image/logo.jpg";
import { toggle } from "../../features/live/liveSlices";

const Header = () => {
  const stateLive = useSelector((state) => state.live);

  const dispatch = useDispatch();
  const sidebarToggle = (state) => dispatch(toggle(state));

  return (
    <HeaderContainer>
      <HeaderPrincipalElemment active={stateLive.state}>
        <div>
          <div>
            <Logo src={logo} alt="logo" />
          </div>
          <SocialMediaButton
            icon={<GiHamburgerMenu />}
            action={() => sidebarToggle(true)}
          />
        </div>
        <SocialMediaContainer>
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
        </SocialMediaContainer>
      </HeaderPrincipalElemment>
    </HeaderContainer>
  );
};

export default Header;

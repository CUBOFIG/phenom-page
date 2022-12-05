import React from "react";
import {
  HeaderContainer,
  HeaderPrincipalElemment,
  ButtonLive,
  LiveIcon,
  SocialMediaContainer,
  Logo,
} from "./Header.elements";
import { useSelector } from "react-redux";
import { BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { SocialMedia, SocialMediaButton } from "../SocialMedia/SocialMedia";
import logo from "../../image/logo.jpg";

const Header = () => {
  const stateLive = useSelector((state) => state.live);

  return (
    <HeaderContainer>
      <HeaderPrincipalElemment>
        <div>
          <div>
            <Logo src={logo} alt="logo" />
          </div>
          {stateLive.state && (
            <ButtonLive href="https://www.twitch.tv/jonhyphenom">
              LIVE <LiveIcon />
            </ButtonLive>
          )}
          <SocialMediaButton icon={<GiHamburgerMenu />} />
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

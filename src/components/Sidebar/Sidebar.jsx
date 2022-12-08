import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SidebarContainer,
  SidebarWrapper,
  BackSidebar,
} from "./Sidebar.elements";
import { toggle } from "../../features/live/liveSlices";
import { BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";
import { SocialMedia } from "components/SocialMedia/SocialMedia";

const Sidebar = () => {
  const stateLive = useSelector((state) => state.live);

  const dispatch = useDispatch();
  const sidebarToggle = (state) => dispatch(toggle(state));

  return (
    <SidebarContainer click={stateLive.isOpen}>
      <div>
        <SidebarWrapper>
          <div>
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
        </SidebarWrapper>
      </div>
      {stateLive.isOpen && <BackSidebar onClick={() => sidebarToggle(false)} />}
    </SidebarContainer>
  );
};

export default Sidebar;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SidebarContainer,
  SidebarWrapper,
  BackSidebar,
} from "./Sidebar.elements";
import { toggle } from "../../features/live/liveSlices";

const Sidebar = () => {
  const stateLive = useSelector((state) => state.live);

  const dispatch = useDispatch();
  const sidebarToggle = (state) => dispatch(toggle(state));

  return (
    <SidebarContainer click={stateLive.isOpen}>
      <div>
        <SidebarWrapper>sidebar</SidebarWrapper>
      </div>
      {stateLive.isOpen && <BackSidebar onClick={() => sidebarToggle(false)} />}
    </SidebarContainer>
  );
};

export default Sidebar;

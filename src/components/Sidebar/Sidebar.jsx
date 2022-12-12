import { useSelector, useDispatch } from "react-redux";
import { toggle } from "features/live/liveSlices";
import { BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";
import { SocialMedia } from "components/SocialMedia/SocialMedia";
import classNames from "classnames";

const Sidebar = () => {
  const stateLive = useSelector((state) => state.live);
  const dispatch = useDispatch();
  const sidebarToggle = (state) => dispatch(toggle(state));

  const toggleSidebar = classNames({
    "sidebar__hidden": stateLive.isOpen
  })

  return (
    <div className="sidebar">
      <div className={toggleSidebar}>
        <div className="sidebar__wrapper">
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
        </div>
      </div>
      {stateLive.isOpen && <div className="sidebar__background" onClick={() => sidebarToggle(false)} />}
    </div>
  );
};

export default Sidebar;

import { BsTwitter, BsInstagram, BsTwitch } from "react-icons/bs";
import { SocialMedia } from "components/SocialMedia/SocialMedia";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { globalStore } from "store/stateGlobal"

const Sidebar = () => {
  const { onSidebarToggle, isOpenSidebar } = globalStore()

  const toggleSidebar = classNames({
    sidebar__hidden: isOpenSidebar,
  });

  return (
    <div className="sidebar">
      <div className={toggleSidebar}>
        <div className="sidebar__options">
          <ul>
            <li>
              <Link to="giveaways">Sorteo</Link>
            </li>
            <li>
              <Link to="pc-specs">PC</Link>
            </li>
            <li>
              <Link to="surprise">Proximamente</Link>
            </li>
          </ul>
        </div>
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
      {toggleSidebar && (
        <div
          className="sidebar__background"
          onClick={() => onSidebarToggle(false)}
        />
      )}
    </div>
  );
};

export default Sidebar;

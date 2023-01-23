
export const SocialMedia = ({ icon, href }) => {
  return (
    <a className="social__media-anchor" icon={icon} href={href}>
      {icon}
    </a>
  );
};

export const SocialMediaButton = ({ icon, action }) => {
  return (
    <button className="social__media-button" onClick={action}>
      {icon}
    </button>
  );
};

import React from "react";
import {
  SocialMediaElement,
  SocialMediaButton as SocialButton,
} from "./SocialMedia.elements";

export const SocialMedia = ({ icon, href }) => {
  return (
    <SocialMediaElement className="a" icon={icon} href={href}>
      {icon}
    </SocialMediaElement>
  );
};

export const SocialMediaButton = ({ icon, action }) => {
  return (
    <SocialButton className="a" onClick={action}>
      {icon}
    </SocialButton>
  );
};

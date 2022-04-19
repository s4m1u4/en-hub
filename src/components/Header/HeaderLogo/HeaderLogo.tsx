import React, { FC } from "react";
import { Link } from "react-router-dom";

import logoEnHub from "assets/images/LogoEnHub.svg";

export const HeaderLogo: FC = () => {
  return (
    <Link to="/dashboard">
      <img
        src={logoEnHub}
        alt="Logo EnHub"
        style={{ width: 85, borderRadius: 8 }}
      />
    </Link>
  );
};

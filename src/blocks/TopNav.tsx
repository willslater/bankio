import React from "react";

import Button from "@/components/Button";
import Logo from "@/components/Logo";

const TopNav = () => {
  return (
    <div className="flex justify-between items-center pb-5">
      <Logo withText />
      <div className="flex gap-6 items-center">
        <div>
          <Button text="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default TopNav;

import React from "react";

type TLogoProps = {
  withText?: boolean;
};

const Logo = ({ withText }: TLogoProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="h-8 w-3 bg-indigo-500 "></div>
      <div className="h-8 w-1 bg-indigo-500 "></div>
      <div className="h-8 w-1 bg-indigo-500 "></div>
      {withText && <div className="ml-1.5">theBANK</div>}
    </div>
  );
};

export default Logo;

import React from "react";

type TButtonProps = {
  text?: string;
  withBgColor?: boolean;
  bgColor?: "bg-lime-500" | "bg-red-500";
  onClick?: () => void;
};

const Button = ({ text, withBgColor, bgColor, onClick }: TButtonProps) => {
  return (
    <button
      className={`${withBgColor ? (bgColor ? bgColor : "bg-lime-400") : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

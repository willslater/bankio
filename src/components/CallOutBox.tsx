import React, { memo } from "react";
import Image from "next/image";

type TCallOutBoxProps = {
  image: string;
  imageAlt?: string;
  title?: string;
  subTitle?: string;
  text?: string;
  isSlider?: boolean;
};

const CallOutBox = ({
  image,
  imageAlt,
  title,
  subTitle,
  text,
  isSlider,
}: TCallOutBoxProps) => {
  return (
    <div
      className={`${
        isSlider ? "flex-none w-full sm:w-1/3" : "w-full"
      } bg-white rounded-2xl py-6 px-4 hover:bg-gray-100 text-center`}
    >
      {title && <h3>{title}</h3>}
      {subTitle && <p className="font-semibold">{subTitle}</p>}
      {text && <p>{text}</p>}
      <div className="flex items-center justify-center pt-5">
        <Image
          src={image || "/images/placeholder.jpg"}
          alt={imageAlt || "Callout image"}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default memo(CallOutBox);

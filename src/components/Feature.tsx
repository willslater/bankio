import React from "react";

type TFeatureProps = {
  number: number;
  title: string;
};
const Feature = ({ number, title }: TFeatureProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-lime-400 rounded-full w-8 h-8 flex items-center justify-center text-sm">
        {number}
      </div>
      {title}
    </div>
  );
};

export default Feature;

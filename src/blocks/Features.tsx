import React from "react";
import Image from "next/image";
import Feature from "@/components/Feature";

const Features = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="max-w-xl leading-tight">
          What makes our app so <span className="text-indigo-500">unique</span>{" "}
          & <span className="text-indigo-500">distinctive</span> over other
          options?
        </h2>
        <p className="pt-10">
          We created an app with you in mind and gave all the features you need.
        </p>
        <div className="grid grid-cols-2 gap-4 py-8">
          <Feature title="Instant touch payments" number={1} />
          <Feature title="Easy to use" number={2} />
          <Feature title="You're in control" number={3} />
          <Feature title="No fee" number={4} />
          <Feature title="Real time notifications" number={5} />
        </div>
      </div>
      <div className="relative w-full h-full p-30">
        <Image
          src={"/images/features_image.png"}
          alt={"Callout image"}
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default Features;

import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="pt-10 pb-2">A modern bank for the modern world</h1>
          <p className="py-10">
            The modern bank fits into your lifestyle instead of the other way
            around. No more need for cards, simply download the app and use it
            for payments on the go.
          </p>
          <Button text="Explore" withBgColor />
          <div className="py-10">
            <p className="font-semibold">Proud partners</p>
            <div className="pt-4 flex gap-10">
              <div className="relative w-32 h-10">
                <Image
                  src={"/images/fake_logo.png"}
                  alt="Fake partner logo"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="relative w-32 h-10">
                <Image
                  src={"/images/fake_logo_5.png"}
                  alt="Fake partner logo"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="relative w-32 h-10">
                <Image
                  src={"/images/fake_logo_3.png"}
                  alt="Fake partner logo"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className="relative w-32 h-10">
                <Image
                  src={"/images/fake_logo_4.png"}
                  alt="Fake partner logo"
                  fill={true}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full p-30 hidden md:block">
          <Image
            src="/images/header_main_image.png"
            priority
            alt="card"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

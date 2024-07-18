"use client";

import React, { useRef } from "react";
import Button from "@/components/Button";
import CallOutBox from "@/components/CallOutBox";

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="pb-10 md:py-20">
      <div className="md:flex justify-between items-end p-6 md:mx-auto md:container">
        <h2 className="md:max-w-xl">Up to date banking all in one app</h2>
        <div className="flex gap-4 pt-5 md:pt-0">
          <Button text="<" onClick={scrollLeft} />
          <Button text=">" withBgColor onClick={scrollRight} />
        </div>
      </div>

      <div className="relative md:mx-auto md:container overflow-x-visible">
        <div
          className="flex overflow-x-scroll flex-nowrap gap-3 md:pt-10 px-6 hide-scrollbar"
          ref={sliderRef}
        >
          <CallOutBox
            title="Business and personal accounts"
            text="Whether you need an account for your personal spending or your business, you can open one in the app."
            image="/images/business.webp"
            isSlider
          />
          <CallOutBox
            title="Easy access bank account"
            text="Open an account within 10 minutes, all verification is done automatically within the application process on the app."
            image="/images/access.webp"
            isSlider
          />
          <CallOutBox
            title="Multi currency accounts"
            text="If you are travelling or need to have transactions in different currencies, no problem."
            image="/images/currency.webp"
            isSlider
          />
          <CallOutBox
            title="Low transactions fees"
            text="We have the lowest transaction fees of any bank. In most cases you wont pay a penny."
            image="/images/lowfee.webp"
            isSlider
          />
          <CallOutBox
            title="Detailed spending analytics"
            text="Take control of your finances with in depth analysis of your finance habits to help you stay in control."
            image="/images/analytics.webp"
            isSlider
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;

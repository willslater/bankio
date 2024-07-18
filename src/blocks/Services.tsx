import Button from "@/components/Button";
import CallOutBox from "@/components/CallOutBox";
import React from "react";

const Services = () => {
  return (
    <div>
      <div className="bg-white rounded-3xl px-8 pb-6 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h2 className="max-w-xl leading-tight">
            Global service provider for your banking needs
          </h2>
          <div className="flex flex-col gap-4 pt-3">
            <p>
              Every effort has been made with you in made in order to give you a
              seamless banking experience, with non of the friction that
              traditional banks have.
            </p>
            <p>
              By understanding your needs, we are able to provide a far better
              well rounded experience that you can rely on.
            </p>
            <div className="pt-4">
              <Button text="Explore" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CallOutBox
            subTitle="Instant touch payments"
            image="/images/instant_payments.webp"
          />
          <CallOutBox
            subTitle="24/7 account access"
            image="/images/24_access.webp"
          />
          <CallOutBox
            subTitle="Real-time payment notifications"
            image="/images/realtime.webp"
          />
          <CallOutBox
            subTitle="Safe encryption and security"
            image="/images/secure.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

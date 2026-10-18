"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

import { getInTouch } from "@/data";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import dynamic from "next/dynamic";
import { Ellipsis } from "@animateicons/react/lucide";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 items-center justify-center rounded-xl bg-gray-100">
      Loading map <Ellipsis duration={4} />
    </div>
  ),
});

const page = () => {
  return (
    <div>
      {" "}
      <div className="h-90 bg-black w-full h">
        <div className="max-w-xl mx-auto text-center py-14 flex flex-col gap-6">
          <h1 className="text-5xl font-semibold">contact us</h1>
          <p className="text-xl">
            Get in touch with our team for a free, no-obligation quote or to
            discuss your security needs
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-16 flex md:flex-row gap-12 flex-col p-4">
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          <h2 className="capitalize text-3xl mb-4">Get in touch</h2>
          {getInTouch.map((value, i) => {
            const Icon = value.icon;
            return (
              <div className=" flex gap-4" key={i}>
                <div className="bg-amber-500 rounded-2xl size-14 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <div className="text-sm font-light">
                  <h4 className="text-lg font-medium pb-1.5 ">{value.title}</h4>
                  <p className="pb-0.5">{value.text}</p>
                  <p className=" ">{value.description}</p>
                </div>
              </div>
            );
          })}

          <div className="rounded-2xl p-5 border-2 border-pink-500 bg-pink-100 flex flex-col gap-3 my-6 max-w-md">
            <h4 className="text-xl mb-1 text-black">Emergency Response</h4>
            <p className="text-gray-600">
              For immediate security assistance or emergency situations, call
              our 24/7 emergency line.
            </p>
            <PrimaryButton
              text={"Emergency: +44 (0) 123 456 7890"}
              className="w-fit px-8 font-medium "
            />
          </div>
        </div>
        <div className="">
          <QuoteRequestForm />
        </div>
      </div>
      <Map />
    </div>
  );
};

export default page;

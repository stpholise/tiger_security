"use client"
import Link from "next/link";
import { ArrowRight, ArrowRightIconHandle } from "@animateicons/react/lucide";
import { useRef } from "react";

const CustomButton = ({text, url} : { text: string, url:string}) => {
  const arrowRightRef = useRef<ArrowRightIconHandle>(null);
  return (
    <Link
      onMouseEnter={() => arrowRightRef.current?.startAnimation()}
      onMouseLeave={() => arrowRightRef.current?.stopAnimation()}
      href={url}
      className="uppercase rounded-md py-2.5 px-4 flex gap-2 items-center border-2 border-gray-200 font-medium text-xl w-fit "
    >
     {text ? text: "More Info"}
      <ArrowRight ref={arrowRightRef} size={18} className="font-bold" />
    </Link>
  );
};

export default CustomButton;

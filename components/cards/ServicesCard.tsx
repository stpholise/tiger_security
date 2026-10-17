"use client";
import Image from "next/image";
import CustomButton from "../Buttons/CustomButton";

const ServicesCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="flex flex-col gap-4  py-3">
      <div className="w-80 h-70">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="object-cover h-full w-full"
        />
      </div>
      <h2 className=" text-lg uppercase font-semibold">{title}</h2>
      <CustomButton url={"/services"} text={"More info"} />
    </div>
  );
};

export default ServicesCard;

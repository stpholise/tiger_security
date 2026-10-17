"use client";
import { IconType } from "react-icons";
import clsx from "clsx";
const ValuesCard = ({
  title,
  description,
  accent,
  icon: Icon,
}: {
  title: string;
  description: string;
  accent: {
    bg: string;
    text: string;
  };
  icon: IconType;
}) => {
  return (
    <div className="rounded-2xl group bg-black p-6 pt-10 text-left flex flex-col gap-4 shadow-lg shadow-black hover:shadow-2xl transition duration-300 h-full">
      <div className={clsx(" w-fit min-w-14 size-14 flex items-center justify-center rounded-md mb-4", accent.bg)}>
        <Icon size={28} className={clsx("", accent.text, )} />
      </div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="">{description}</p>
    </div>
  );
};

export default ValuesCard;

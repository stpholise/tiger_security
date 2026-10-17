import Image from "next/image"; 
import type { SecurityService } from "@/types";
import { LuCircleCheck } from "react-icons/lu";
import clsx from "clsx";
import CustomButton from "../Buttons/CustomButton";

interface ServiceCardProps {
  service: SecurityService;
  index:number
}

const SecurityServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <article className={clsx("overflow-hidden rounded-2xl   flex items-center justify-center gap-6 md:gap-18 px-4", index%2 == 0 ? " flex-col md:flex-row": "flex-col md:flex-row-reverse")}>
      <div className=" flex-col flex gap-5 rounded-2xl text-black bg-gray-100 w-full md:w-100 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={1080}
          height={720}
          className="h-64 w-full object-cover"
        />
        <div className="p-4">
          <h4 className="font-semibold mb-4 text-lg ">Key Features</h4>

          <ul className="grid gap-3 sm:grid-cols-1">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <LuCircleCheck
                  size={18}
                  className="mt-1 shrink-0 text-green-600"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-4 p-6 flex flex-col items-center justify-center max-w-lg mx-auto text-center">
        <h3 className="text-xl font-bold">{service.title}</h3>

        <p className="text-gray-600">{service.description}</p>

        <CustomButton
          url="/contact"
          text={"Get a Quote"}
         />
           
      </div>
    </article>
  );
};

export default SecurityServiceCard;

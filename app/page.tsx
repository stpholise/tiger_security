"use client";
import { IoShieldHalfSharp } from "react-icons/io5";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";
import ServicesCard from "@/components/cards/ServicesCard";
import { services, qualities } from "@/data";
import QualityCard from "@/components/cards/QualityCard";

// import CustomButton from "@/components/Buttons/CustomButton";
import { useRouter } from "next/navigation";
import CustomFooter from "@/components/cards/CustomFooter";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      <div className="max-w-2xl mx-auto py-10 md:py-18 px-4 flex flex-col gap-8 ">
        <div className="animate-bounce mx-auto my-6 max-w-fit  flex items-center justify-center rounded-full p-4 bg-amber-900/20 border-2 border-amber-400">
          <IoShieldHalfSharp className="  size-12 pt-1 text-amber-400 z-10" />
        </div>
        <h1 className=" text-4xl md:text-5xl mx-auto leading-14 font-bold max-w-xl text-center">
          Professional Security Services You Can Trust
        </h1>
        <p className=" text-lg font-medium text-center">
          EverGuard Security UK Limited provides comprehensive security
          solutions across the United Kingdom. Always watching, always
          protecting.
        </p>
        <div className=" flex  gap-8 items-center justify-center content-center">
          <PrimaryButton className={""} text={"Get a Free Quote"} />
          <SecondaryButton text={"Our Services"} />
        </div>
      </div>

      <div className="py-18 max-w-6xl px-4 flex flex-col gap-8">
        <h2 className="uppercase font-semibold text-2xl md:text-xl text-center mb-4">
          Our Services
        </h2>
        <div className=" flex md:flex-row flex-col gap-8 items-center ">
          {services.slice(0, 3).map((service, i) => (
            <ServicesCard key={i} image={service.image} title={service.title} />
          ))}
        </div>

        <div className="mx-auto w-fit">
          <PrimaryButton
            className="text-lg  capitalize"
            onClick={() => router.push("/services")}
            text={"view all services "}
          />
        </div>
      </div>

      <div className="w-full bg-gray-800">
        <div className="py-18 max-w-6xl mx-auto px-4 flex flex-col gap-8">
          <h2 className="uppercase font-semibold text-xl text-center mb-4 mx-auto w-fit">
            Why Choose tiger security
          </h2>
          <div className="   gap-8 items-center grid sm:grid-cols-2 md:grid-cols-4 ">
            {qualities.slice(0).map((quality, i) => (
              <QualityCard
                key={i}
                icon={quality.icon}
                title={quality.title}
                description={quality.description}
              />
            ))}
          </div>
        </div>
      </div>

      <CustomFooter />
    </div>
  );
}

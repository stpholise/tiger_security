"use client";
import { credentials, values, reasonsToChooseUs } from "@/data";
import { Clock } from "@animateicons/react/lucide";
import ValuesCard from "@/components/cards/ValuesCard";

const page = () => {
  return (
    <div>
      <div className="h-90 bg-black w-full h">
        <div className="max-w-xl mx-auto text-center py-14 flex flex-col gap-6 px-4">
          <h1 className=" text-4xl md:text-5xl font-semibold">
            About Tiger Security
          </h1>
          <p className="text-xl">
            Your trusted partner in professional security services across
            Nigeria
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4 flex md:flex-row flex-col gap-8 justify-between">
        <div className="flex-col flex w-full md:w-1/2 ">
          <h2 className="text-3xl font-medium pb-8 pt-4">Who We Are</h2>
          <div className=" text-lg flex flex-col gap-4 text-gray-200">
            <p className="">
              EverGuard Security UK Limited is a leading provider of
              comprehensive security solutions across the United Kingdom. With
              years of experience in the security industry, we have built a
              reputation for excellence, reliability, and professionalism.
            </p>
            <p className="">
              Our mission is simple: to provide our clients with peace of mind
              through high-quality security services delivered by trained
              professionals. We understand that every client has unique security
              needs, and we tailor our services to meet those specific
              requirements.
            </p>
            <p className="">
              From construction sites to commercial properties, from mobile
              patrols to key holding services, we offer a complete range of
              security solutions designed to protect what matters most to you.
            </p>
          </div>
        </div>

        <div className="bg-gray-100 w-full md:text-base text-sm md:w-max h-fit max-h-fit p-4 lg:p-8 rounded-2xl">
          <h3 className="capitalize font-semibold text-2xl pb-4 text-black">
            Our Credentials
          </h3>
          <div className="">
            {credentials.map((item, i) => (
              <div
                className=" flex gap-3 py-1 items-center text-gray-600"
                key={i}
              >
                <div className="size-10 bg-amber-300 flex items-center justify-center rounded-md">
                  <Clock size={18} className="text-white" />
                </div>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" py-12">
        <h3 className="text-3xl capitalize font-semibold text-center">
          {" "}
          our Values
        </h3>
        <div className=" py-12 grid md:grid-cols-3 2xs:grid-cols-2  lg:grid-cols-4 gap-8 px-8 max-w-7xl mx-auto">
          {values.map((value, i) => (
            <ValuesCard
              key={i}
              icon={value.icon}
              accent={value.accent}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
      
      <div className="py-18 px-4 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-medium pb-8 pt-4 text-center">
            Why Clients Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {reasonsToChooseUs.map((value, i) => (
              <div key={i} className=" p-6 rounded-2xl bg-gray-900 ">
                <h5 className="text-xl uppercase font-semibold pb-4">
                  {value.title}
                </h5>
                <p className="md:text-lg">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

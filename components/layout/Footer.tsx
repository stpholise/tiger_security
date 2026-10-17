import Link from "next/link";
import Image from "next/image";
import { navigations, contact } from "@/data";
import { QuickLink } from "@/types";

const Footer = () => {
  return (
    <div className="pt-8 bg-black">
      <div className=" max-w-7xl flex-col md:flex-row gap-16 mx-auto py-10 px-4 flex items-start    md:gap-24 justify-between">
        <div className="max-w-80   py-2 ">
          <Link
            href={"/"}
            className="w-28 h-fit object-cover overflow-hidden items-center  block "
          >
            <Image
              src={"/tiger_security_logo.png"}
              width={200}
              height={180}
              className="cursor-pointer w-28 h-20    object-cover"
              alt="logo"
            />
          </Link>
          <p className="mt-4 lg:mt-8 text-sm">
            Professional security services across Nigeria. Always watching,
            always protecting.
          </p>
        </div>
        <div className="flex sm:flex-row gap-12 lg:gap-28  ">
          <div className="">
            <h4 className="text-xl font-semibold text-amber-300">
              Quick Links
            </h4>
            <div className=" flex flex-col gap-2 pt-6 ">
              {Array.isArray(navigations) &&
                navigations.map((item: QuickLink, i: number) => (
                  <Link key={i} href={item.url} className="p-1  text-sm ">
                    {" "}
                    {item.title}
                  </Link>
                ))}
            </div>
          </div>

          <div className="">
            <h4 className="text-xl font-semibold text-amber-300">Contact</h4>
            <div className=" flex flex-col gap-2 pt-6 ">
              {contact.map((item, i) => {
                const Icon = item.icon;
                return (
                  <p key={i} className="p-1  text-sm  flex items-center gap-2">
                    {" "}
                    {Icon && <Icon />}
                    {item.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

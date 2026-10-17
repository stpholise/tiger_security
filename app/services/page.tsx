import { securityService } from "@/data";
import SecurityServiceCard from "@/components/cards/SecurityServiceCard";
import CustomFooter from "@/components/cards/CustomFooter";

const page = () => {
  return (
    <div>
      <div className="h-90 bg-black w-full h">
        <div className="max-w-xl mx-auto text-center py-14 flex flex-col gap-6">
          <h1 className="text-5xl font-semibold">Our Security Services</h1>
          <p className="text-xl">
            Comprehensive security solutions tailored to protect your business,
            property, and assets
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-12 py-18">
        {securityService.map((value, i) => (
          <SecurityServiceCard key={i} service={value} index={i} />
        ))}
      </div>
      <CustomFooter />
    </div>
  );
};

export default page;

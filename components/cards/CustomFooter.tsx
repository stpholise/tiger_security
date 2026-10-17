 import PrimaryButton from "../Buttons/PrimaryButton"

const CustomFooter = () => {
  return (
    <div className="w-full ">
        <div className="py-18 max-w-xl text-center mx-auto px-4 flex flex-col gap-8">
          <h2 className="uppercase font-semibold text-xl text-center  mx-auto w-fit">
            Ready to secure your Property?
          </h2>
          <p className=" ">
            Contact us today for a free, no-obligation quote. Our team is ready
            to discuss your security needs.
          </p>
          <PrimaryButton text={"Contact us today"} className="w-fit  mx-auto" />
        </div>
      </div>
  )
}

export default CustomFooter
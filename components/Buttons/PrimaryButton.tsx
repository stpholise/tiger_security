import clsx from "clsx";

const PrimaryButton = ({
  className,
  onClick,
  text,
}: {
  className?: string;
  onClick?: () => void;
  text: string;
}) => {
  return (
    <div onClick={onClick} className={clsx("cursor-pointer border-amber-300 border-2 bg-amber-300/80 hover:bg-amber-300/50 py-3 px-4 text-white hover:text-amber-500 rounded-md transition-colors duration-300 ", className)}>
      {text}
    </div>
  );
};

export default PrimaryButton;

import clsx from "clsx";

const SecondaryButton = ({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "px-4 py-3 rounded-md border-amber-300 border-2 text-amber-300 transition duration-300 hover:text-white hover:bg-amber-300/80 font-medium",
        className,
      )}
    >
      {text}
    </div>
  );
};

export default SecondaryButton;

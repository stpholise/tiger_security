"use client";
import type { ComponentType, Ref } from "react";
import { useRef } from "react";

interface QualityCardProps<THandle> {
  // ElementType allows components with custom props and refs to be passed safely
  icon: ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
    ref?: Ref<THandle>;
  }>;
  title: string;
  description: string;
}

const QualityCard = <THandle,>({
  icon: Icon,
  title,
  description,
}: QualityCardProps<THandle>) => {
  const iconRef = useRef<THandle>(null);
  return (
    <div
      className="rounded-2xl group bg-black p-4 pt-10 text-center flex flex-col gap-2 shadow-lg shadow-black hover:shadow-2xl transition duration-300 h-full"
      onMouseEnter={() => {
        (
          iconRef.current as { startAnimation?: () => void } | null
        )?.startAnimation?.();
      }}
      onMouseLeave={() => {
        (
          iconRef.current as { stopAnimation?: () => void } | null
        )?.stopAnimation?.();
      }}
    >
      <div className="mb-4    flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 mx-auto">
        <Icon
          ref={iconRef}
          size={26}
          strokeWidth={2}
          className={"text-amber-600"}
        />{" "}
      </div>

      <h3 className="mb-2 text-lg font-semibold">{title}</h3>

      <p className="text-sm leading-6 text-gray-500">{description}</p>
    </div>
  );
};

export default QualityCard;

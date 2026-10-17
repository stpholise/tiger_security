"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  return <div>{children}</div>;
};

export default Provider;

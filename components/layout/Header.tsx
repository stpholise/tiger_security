"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LuMenu, LuX, } from "react-icons/lu";
import { useEffect, useState } from "react";
import { navigations } from "@/data";
import clsx from "clsx";

const ANIMATION_DURATION = 300;

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => {
    setShowMenu(true);
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (openMenu) return;
    if (!showMenu) return;

    const timeoutId = setTimeout(() => {
      setShowMenu(false);
    }, ANIMATION_DURATION);

    return () => clearTimeout(timeoutId);
  }, [openMenu, showMenu]);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:gap-12">
        <Link
          href="/"
          aria-label="Tiger Security home"
          className="relative h-12 w-32 shrink-0 md:h-16 md:w-36"
        >
          <Image
            src="/tiger_security_logo.png"
            alt="Tiger Security"
            fill
            priority
            sizes="(max-width: 768px) 128px, 144px"
            className="object-contain"
          />
        </Link>

        {/* Desktop navigation & actions */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-4">
            {navigations.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                aria-current={pathname === item.url ? "page" : undefined}
                className={clsx(
                  "px-2 py-1.5 text-base font-medium capitalize transition-colors hover:text-amber-300",
                  pathname === item.url ? "text-amber-300" : "text-gray-100",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>

           
           
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={handleOpenMenu}
            aria-label="Open navigation menu"
            aria-expanded={openMenu}
            aria-controls="mobile-navigation"
            className="rounded-lg p-2 text-white hover:bg-white/10"
          >
            <LuMenu className="size-7" />
          </button>
        </div>

        {/* Mobile navigation drawer */}
        {showMenu && (
          <div
            className={clsx(
              "fixed inset-0 h-screen  z-50 bg-black/80 md:hidden transition-opacity",
              openMenu ? "visible opacity-100" : "invisible opacity-0",
            )}
            onClick={handleCloseMenu}
          >
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              aria-hidden={!openMenu}
              inert={!openMenu}
              className={clsx(
                "relative flex h-full w-9/12 max-w-sm flex-col gap-4 bg-gray-100 px-4 pt-20 shadow-xl",
                openMenu ? "animate-slide-in" : "animate-slide-out",
              )}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleCloseMenu}
                aria-label="Close navigation menu"
                className="absolute right-4 top-5 rounded-xl border border-gray-200 bg-white p-2 shadow-sm text-gray-700 hover:bg-gray-50"
              >
                <LuX className="size-6" />
              </button>

              {navigations.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={handleCloseMenu}
                  aria-current={pathname === item.url ? "page" : undefined}
                  tabIndex={openMenu ? undefined : -1}
                  className={clsx(
                    "px-2 py-1.5 text-xl font-semibold capitalize transition-colors hover:text-amber-600",
                    pathname === item.url ? "text-amber-600" : "text-gray-700",
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

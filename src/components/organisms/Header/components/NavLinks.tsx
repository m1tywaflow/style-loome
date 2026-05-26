"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-xl text-sm transition duration-200 ${
        active
          ? "bg-zinc-800 text-white"
          : "text-zinc-400 hover:text-white hover:bg-zinc-800"
      }`}
    >
      {children}
    </Link>
  );
};

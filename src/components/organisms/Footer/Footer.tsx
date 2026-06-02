import Link from "next/link";
import { BadgeCheck, ArrowRight } from "lucide-react";
import { HOME_LINKS, PRODUCTS_LINKS } from "./components/NavLinks";
import {
  IconBrandInstagram,
  IconBrandDribbble,
  IconBrandX,
} from "@tabler/icons-react";
const columns = [
  {
    title: "Home",
    links: HOME_LINKS,
  },
  {
    title: "Products",
    links: PRODUCTS_LINKS,
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white border-t   border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between px-8 pt-14 pb-12 border-b  border-white/[0.06]">
          <h1 className="text-[72px] leading-none  font-semibold">
            Style<span className="text-[#b8a58a]">.</span>Loom
          </h1>
          <div className="flex gap-3 mt-10 lg:mt-0">
            {[
              { icon: IconBrandInstagram, href: "/" },
              { icon: IconBrandDribbble, href: "/" },
              { icon: IconBrandX, href: "/" },
              { icon: BadgeCheck, href: "/" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  href={item.href}
                  className="w-11 h-11 rounded-md bg-[#e8dfd3] text-black flex items-center justify-center hover:opacity-80 cursor-pointer transition"
                >
                  <Icon size={26} strokeWidth={1.8} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4 py-10 border-b border-dashed border-white/[0.06]">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-mono mb-5">{col.title}</h3>
              <nav className="flex flex-wrap gap-x-4 gap-y-2">
                {col.links.map((link, index) => (
                  <div key={link.href} className="flex items-center gap-4">
                    <Link
                      href={link.href}
                      className="text-sm font-mono text-white/35 hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                    {index !== col.links.length - 1 && (
                      <span className="text-white/15">•</span>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          ))}
          <div className="md:ml-auto w-full max-w-sm">
            <h3 className="text-sm font-mono mb-5">Subscribe to Newsletter</h3>
            <form className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full font-mono h-12 bg-[#111111] border-dashed border-white/[0.04] rounded-md px-5 pr-14 text-sm text-white placeholder:text-white/25 outline-none"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
        <div className="flex font-mono flex-col md:flex-row items-start md:items-center justify-between gap-5 px-8 py-6">
          <p className="text-xs tracking-wide text-white/30">
            © 2026 StyleLoom. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/30">
            <Link
              href="/terms-conditions"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

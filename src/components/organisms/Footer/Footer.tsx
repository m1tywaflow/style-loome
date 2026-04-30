import Link from "next/link";
import { HOME_LINKS, PRODUCTS_LINKS } from "./components/NavLinks";

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
    <footer>
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-8">
        <div className="flex flex-col sm:flex-row gap-16 lg:gap-32">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col">
              {col.title}
              <nav aria-label={col.title} className="flex gap-6">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/70 hover:text-gray-500 hover:underline text-base transition-colors duration-200 py-3 border-b border-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="flex justify-between pt-20 p-4">
          <h1 className="text-white text-sm">
            @ 2024 StyleLoom. All rights reserved.
          </h1>
          <div className="flex gap-2">
            <Link
              href="/terms-conditions"
              className="text-white hover:text-gray-500 duration-200 transition"
            >
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link
              href="/privacy-policy"
              className="text-white hover:text-gray-500 duration-200 transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

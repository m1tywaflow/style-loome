import { NavLink } from "./components/NavLinks";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full border-b border-zinc-800 bg-black text-white font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/products">Products</NavLink>
        </div>
        <div className="text-lg font-semibold tracking-wide">Style.Loome</div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 cursor-pointer duration-200 transition">
            <ShoppingCart size={18} />
          </button>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-xl bg-[#AE9B84] text-black font-medium font-sans hover:bg-white transition duration-200 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

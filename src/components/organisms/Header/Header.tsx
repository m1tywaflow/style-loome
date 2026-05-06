import { NavLink } from "./components/NavLinks";
import { ShoppingCart } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full border-b border-zinc-800 bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <NavLink href="/" active>
            Home
          </NavLink>
          <NavLink href="/products">Products</NavLink>
        </div>
        <div className="text-lg font-semibold tracking-wide">Style.Loome</div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 cursor-pointer duration-200 transition">
            <ShoppingCart size={18} />
          </button>
          <button className="px-4 py-2 rounded-xl bg-[#AE9B84] font-sans hover:bg-white  text-black font-medium hover:opacity-90 cursor-pointer duration-200 transition">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
};

export const NavLink = ({ href, children, active }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-xl text-sm transition ${
        active
          ? "bg-zinc-800 text-white"
          : "text-zinc-400 hover:text-white hover:bg-zinc-800"
      }`}
    >
      {children}
    </Link>
  );
};

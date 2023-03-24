import Link from "next/link";
import Nav from "./Nav";

interface HeaderProps {
  className?: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header
      className={`${props.className} px-6 py-4 text-xl font-bold font-display flex`}
    >
      <span className="text-2xl font-bold font-display">
        <Link href={"/"}>zero_</Link>
      </span>
      <Nav className="ml-auto" />
    </header>
  );
};

export default Header;

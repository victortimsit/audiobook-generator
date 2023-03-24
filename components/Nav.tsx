import Link from "next/link";

interface NavProps {
  className?: string;
}

const Nav = (props: NavProps) => {
  return (
    <nav
      className={`${props.className} flex items-center gap-6 text-base font-normal`}
    >
      <Link href={"/pricing"}>Pricing</Link>
      <a href="https://t.me/+WYob4Gv5ZrJhNzc0" target={"_blank"}>
        Telegram
      </a>
      <a href="https://twitter.com/zero_sh_" target={"_blank"}>
        Twitter
      </a>
    </nav>
  );
};

export default Nav;

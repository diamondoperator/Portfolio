import Image from "next/image";
import Link from "next/link";
import NavLogo from "../../public/assets/navbarLogo.png";

// global navbar logo --original logo <Image src={NavLogo} alt="/" className="cursor-pointer w-20" />
export default function NavbarLogoGlobal(): JSX.Element {
  return (
    <Link href="/">
      <h3>Bryant Davis</h3>
    </Link>
  );
}

import Copyright from "./Copyright";
import LinksOne from "./LinksOne";
import LinksTwo from "./LinksTwo";
import Logo from "./Logo";
import Newsletter from "./Newsletter";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="grid gap-[3em] grid-cols-2 landscape:grid-cols-[0.2fr_0.2fr_0.2fr_0.4fr] landscape:grid-rows-[0.9fr_0.1fr]">
      <Newsletter />
      <LinksOne />
      <LinksTwo />
      <Socials />
      <Logo />
      <Copyright />
    </div>
  );
}

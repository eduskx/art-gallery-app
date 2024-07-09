import Link from "next/link";
import { NavigationList } from "./Navigation.styled";

export default function Navigation() {
  return (
    <NavigationList>
      <li>
        <Link href="/">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces/">Art Pieces</Link>
      </li>
      <li>
        <Link href="/favorites">Favorites</Link>
      </li>
    </NavigationList>
  );
}

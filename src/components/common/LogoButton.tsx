import Link from "next/link";
import { Icon } from "@/components/common/Icon";

export default function LogoButton() {
  return (
    <Link href="/">
      <Icon name="logo" alt="main-logo-button" width={28} height={32} />
    </Link>
  );
}

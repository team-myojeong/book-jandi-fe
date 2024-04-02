import { Icon } from "@/components/common/Icon";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <Link href={`/post-poll`}>
      <div className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-green-500 flex justify-center">
        <Icon alt="" name="document/add" width={35} height={35} />
      </div>
    </Link>
  );
}

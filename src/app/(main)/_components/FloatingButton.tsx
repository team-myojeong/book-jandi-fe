import { Icon } from "@/components/common/Icon";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-0 w-full max-w-[29.25rem] h-[7.6rem] flex justify-end">
      <Link href={`/post-poll`}>
        <div className="w-14 h-14 rounded-full bg-green-500 flex justify-center mr-4">
          <Icon alt="" name="document/add" width={35} height={35} />
        </div>
      </Link>
    </div>
  );
}

import { Icon } from "@/components/common/Icon";
import Link from "next/link";

export default function FloatingButton() {
  return (
    <div className="fixed bottom-0 flex h-[7.6rem] w-full max-w-[29.25rem] justify-end">
      <Link href={`/post-poll`}>
        <div className="mr-4 flex h-14 w-14 justify-center rounded-full bg-green-500 p-[10px] drop-shadow-xl">
          <Icon
            alt="add-icon-button"
            name="document/add-white"
            width={35}
            height={35}
          />
        </div>
      </Link>
    </div>
  );
}

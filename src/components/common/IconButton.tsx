import { Icon, IconType } from "@/components/common/Icon";

export default function IconButton({
  name,
  alt,
  width,
  height,
  onClick,
}: {
  name: IconType;
  alt: string;
  width?: number;
  height?: number;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick}>
      <Icon name={name} alt={alt} width={width} height={height} />
    </button>
  );
}

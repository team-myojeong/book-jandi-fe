interface FunnelTitleProps {
  title: string;
  subTitle: string;
  className?: React.HTMLProps<HTMLElement>["className"];
}
export default function FunnelTitle({
  title,
  subTitle,
  className,
}: FunnelTitleProps) {
  return (
    <div className={`text-start ${className}`}>
      <p className="title1 mb-2">{title}</p>
      <p className="body1">{subTitle}</p>
    </div>
  );
}

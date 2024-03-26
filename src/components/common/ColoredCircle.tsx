import { useMemo } from "react";

export default function ColoredCircle({
  width,
  percentage = 100,
}: {
  width: number;
  percentage: number;
}) {
  const rem = useMemo(() => width / 4, [width]);

  /* ISSUE: w-${rem}을 제일 앞에 두는 경우 먹히지 않는 문제 */
  //TODO: percentage에 따른 background variation*/
  return <div className={`rounded-full w-${rem} h-${rem} bg-green-500`} />;
}

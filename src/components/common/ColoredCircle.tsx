export default function ColoredCircle({
  width,
  percentage = 100,
}: {
  width: number;
  percentage: number;
}) {
  const rem = width / 4;
  const size = `h-${rem} w-${rem}`;

  //TODO: percentage에 따른 background variation*/
  return <div className={`rounded-full ${size} bg-green-500`} />;
}

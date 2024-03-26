export default function Title({ text }: { text: string }) {
  return (
    <div className="flex">
      <div className="h-6 border-l-4 border-l-green-500 mr-2" />
      <span className="title2">{text}</span>
    </div>
  );
}

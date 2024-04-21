export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`-ml-4 h-screen w-screen max-w-[500px] bg-grey-50 px-4 pb-10`}
    >
      {children}
    </div>
  );
}

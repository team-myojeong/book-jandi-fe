export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`mx-auto mt-[60px] flex min-h-[calc(100vh_-_3.75rem)] max-w-[500px] flex-col px-4`}
    >
      {children}
    </main>
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`mt-[60px] flex min-h-[calc(100vh_-_3.75rem)] flex-col px-4`}
    >
      {children}
    </main>
  );
}

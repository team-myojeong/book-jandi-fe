export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className={`flex flex-col px-4 min-h-[calc(100vh_-_3.75rem)] mt-16`}>
      {children}
    </main>
  );
}

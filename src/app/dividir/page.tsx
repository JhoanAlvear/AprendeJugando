import DividirComponent from '@/components/DividirComponent';

export default function DividirPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Dividir
      </h1>
      <DividirComponent />
    </main>
  );
}

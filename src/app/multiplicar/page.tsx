import MultiplicarComponent from '@/components/MultiplicarComponent';

export default function MultiplicarPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Multiplicar
      </h1>
      <MultiplicarComponent />
    </main>
  );
}

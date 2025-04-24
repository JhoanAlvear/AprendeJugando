import SumarComponent from '@/components/SumarComponent';

export default function SumarPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Sumar
      </h1>
      <SumarComponent />
    </main>
  );
}

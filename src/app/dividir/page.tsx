'use client';

import DividirComponent from '@/components/DividirComponent';
import CountingObjects from '@/components/CountingObjects';
import { useSearchParams } from 'next/navigation';

export default function DividirPage() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty') || 'facil';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Dividir
      </h1>
      <CountingObjects difficulty={difficulty} operation="dividir" />
      <DividirComponent difficulty={difficulty} />
    </main>
  );
}

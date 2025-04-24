'use client';

import SumarComponent from '@/components/SumarComponent';
import CountingObjects from '@/components/CountingObjects';
import { useSearchParams } from 'next/navigation';

export default function SumarPage() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty') || 'facil';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Sumar
      </h1>
      <CountingObjects difficulty={difficulty} operation="sumar" />
      <SumarComponent difficulty={difficulty}/>
    </main>
  );
}

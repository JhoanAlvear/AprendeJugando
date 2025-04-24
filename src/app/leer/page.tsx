'use client';

import LeerComponent from '@/components/LeerComponent';
import CountingObjects from '@/components/CountingObjects';
import { useSearchParams } from 'next/navigation';

export default function LeerPage() {
    const searchParams = useSearchParams();
    const difficulty = searchParams.get('difficulty') || 'facil';
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Leer
      </h1>
      <CountingObjects difficulty={difficulty}  operation="leer"/>
      <LeerComponent difficulty={difficulty} />
    </main>
  );
}

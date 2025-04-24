'use client';

import LeerComponent from '@/components/LeerComponent';
import CountingObjects from '@/components/CountingObjects';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card"
import { useState } from 'react';

export default function LeerPage() {
    const searchParams = useSearchParams();
    const difficulty = searchParams.get('difficulty') || 'facil';
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Leer
      </h1>
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center">
            <CountingObjects difficulty={difficulty}  operation="leer" num1={num1} num2={num2}/>
            <LeerComponent difficulty={difficulty} />
          </CardContent>
        </Card>
    </main>
  );
}

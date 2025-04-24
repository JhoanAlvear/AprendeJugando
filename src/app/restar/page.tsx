'use client';

import RestarComponent from '@/components/RestarComponent';
import CountingObjects from '@/components/CountingObjects';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card"

export default function RestarPage() {
  const searchParams = useSearchParams();
  const difficulty = searchParams.get('difficulty') || 'facil';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Restar
      </h1>
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center justify-center">
          <CountingObjects difficulty={difficulty}  operation="restar"/>
          <RestarComponent difficulty={difficulty}/>
        </CardContent>
      </Card>
    </main>
  );
}


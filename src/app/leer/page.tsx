'use client';

import LeerComponent from '@/components/LeerComponent';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from "@/components/ui/card"
import { useState } from 'react';

export default function LeerPage() {
    const searchParams = useSearchParams();
    const difficulty = searchParams.get('difficulty') || 'facil';

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Leer
      </h1>
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center">
            <LeerComponent difficulty={difficulty} />
          </CardContent>
        </Card>
    </main>
  );
}


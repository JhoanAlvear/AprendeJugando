import LeerComponent from '@/components/LeerComponent';

export default function LeerPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-4 text-primary-foreground">
        Leer
      </h1>
      <LeerComponent />
    </main>
  );
}

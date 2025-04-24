
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold mb-8 text-primary-foreground">
        Aprende Jugando
      </h1>
      <div className="grid grid-cols-2 gap-8">
        <Link href="/sumar" className="bg-primary text-primary-foreground rounded-xl shadow-md p-6 flex items-center justify-center text-2xl font-semibold hover:bg-primary/80 transition-colors">
          Sumar
        </Link>
        <Link href="/restar" className="bg-secondary text-secondary-foreground rounded-xl shadow-md p-6 flex items-center justify-center text-2xl font-semibold hover:bg-secondary/80 transition-colors">
          Restar
        </Link>
        <Link href="/multiplicar" className="bg-chart-2 text-primary-foreground rounded-xl shadow-md p-6 flex items-center justify-center text-2xl font-semibold hover:bg-chart-2/80 transition-colors">
          Multiplicar
        </Link>
        <Link href="/dividir" className="bg-chart-1 text-primary-foreground rounded-xl shadow-md p-6 flex items-center justify-center text-2xl font-semibold hover:bg-chart-1/80 transition-colors">
          Dividir
        </Link>
        <Link href="/leer" className="bg-accent text-accent-foreground rounded-xl shadow-md p-6 flex items-center justify-center text-2xl font-semibold hover:bg-accent/80 transition-colors">
          Leer
        </Link>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <section className="h-screen w-screen">
        <nav className="w-full">
          <ul className="flex w-full flex-row justify-evenly px-80 py-16">
            <li className="text-2xl">Proyectos</li>
            <li className="text-2xl">Sobre Mi</li>
            <li className="text-2xl">Email</li>
            <li className="text-2xl">Ingles</li>
          </ul>
        </nav>
      </section>
      <section className="h-screen w-screen bg-black/30 backdrop-blur-sm">
        <h1 className="text-4xl font-extrabold">App Home</h1>
      </section>
    </main>
  );
}

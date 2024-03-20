import Image from "next/image";
import backgroundMinImg from "../../public/assets/UX_UI_background.png";
import romi from "../../public/assets/romi.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative">
        <div className="pl-10 pt-10">
          <h1 className="text-[128px]">Yo</h1>
          <h1 className="text-[170px] uppercase">Soy</h1>
        </div>
        <div className="absolute right-96 top-11 -translate-x-28">
          <button className="rounded-full  border-2 border-secondary bg-primary px-6 py-1 text-3xl text-secondary hover:bg-primarylight">
            Ingles
          </button>
        </div>
        <nav className="fixed right-4 top-8 z-50 flex flex-row gap-8">
          <button className="rounded-full border-4 border-secondary bg-primary px-10 py-2 text-5xl text-secondary hover:bg-primarylight">
            Soy
          </button>
          <button className="rounded-full border-4 border-black bg-secondary px-10 py-2 text-5xl text-primary hover:bg-secondarylight">
            Trabajo
          </button>
        </nav>
        <div className="relative w-full">
          <Image
            src={backgroundMinImg}
            alt="Bakcground Image"
            width={1300}
            height={1080}
            className="relative -top-28 left-1/2 -z-10 -translate-x-1/2"
          />
        </div>
      </section>
      <section className="relative h-screen bg-sky-background bg-cover">
        <Image
          src={romi}
          alt="Romi"
          className="absolute left-0 top-0 h-full w-auto"
        />
      </section>
    </main>
  );
}

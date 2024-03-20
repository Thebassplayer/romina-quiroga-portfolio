import Image from "next/image";
import backgroundMinImg from "../../public/assets/UX_UI_background.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <section>
        <div className="pt-14 pl-10">
          <h1 className="text-[128px]">Yo</h1>
          <h1 className="text-[170px] uppercase">Soy</h1>
          <nav></nav>
          <Image
            src={backgroundMinImg}
            alt="Bakcground Image"
            width={924}
            height={1080}
            className="absolute top-96 left-52 z-[-1]"
          />
        </div>
      </section>
    </main>
  );
}

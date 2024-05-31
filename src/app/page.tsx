import ChangingWord from "@/components/ChangingWord/ChangingWord";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex h-screen w-screen items-center justify-center">
        <div className="flex flex-col justify-center *:font-roboto *:text-8xl *:font-extrabold lg:w-[750px]">
          <div className="flex justify-start">
            <p>El</p>
            <p>&nbsp;</p>
            <p className="font-light">diseño</p>
            <p>&nbsp;</p>
            <p className="font-roboto">es una</p>
          </div>
          <div className="flex justify-start">
            <p>forma de</p>
            <p>&nbsp;</p>
            <ChangingWord />
          </div>
        </div>
      </section>
    </>
  );
}

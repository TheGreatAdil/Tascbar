import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto h-screen flex py-12 flex-col justify-between font-[family-name:var(--font-inter)] shadow-xl">
      <main>
        <div className="w-full grid justify-center">
          <Image
            width={150}
            height={150}
            src={"/tascbar.png"}
            alt="tascbar logo"
            className="mx-auto dark:invert"
          />

          <h1 className="max-w-2xl mx-auto py-8 mt-16 text-4xl text-center">
            We're building our website and but we can build yours too!
          </h1>

          <div className="w-full h-96 my-8 flex justify-center items-center border border-border border-dashed rounded-xl">
            crane
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

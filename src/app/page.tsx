import {
  IconBrandInstagram,
  IconBrandInstagramFilled,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandWhatsappFilled,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto h-screen flex py-12 flex-col justify-between font-[family-name:var(--font-inter)] shadow-xl">
      <main>
        <div className="w-full grid justify-center">
          <div className="w-48 mx-auto">
            <Image
              width={150}
              height={150}
              src={"/tascbar.png"}
              alt="tascbar logo"
              className="mx-auto dark:invert"
            />
          </div>

          <h1 className="mx-auto py-6 mt-12 text-4xl text-center">
            We're building our website and but we <br /> can build yours too!
          </h1>

          <div className="w-full h-96 my-8 flex justify-center items-center border border-border border-dashed rounded-xl">
            crane
          </div>
        </div>
      </main>

      <footer className="w-full max-w-2xl mx-auto flex justify-between">
        <span>Get a call</span>
        <div className="grid grid-cols-3 gap-2">
          <a href="https://www.instagram.com/tasc.bar/">
            <IconBrandInstagram />
          </a>
          <a href="https://wa.me/918089780714?text=Hey!%20I%20want%20to%20enquire%20about%20a%20website.">
            <IconBrandWhatsapp />
          </a>
          <a href="https://www.instagram.com/tasc.bar/">
            <IconBrandInstagram />
          </a>
        </div>
      </footer>
    </div>
  );
}

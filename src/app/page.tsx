import { Particles } from "@/components/ui/particles";
import {
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandWhatsappFilled,
} from "@tabler/icons-react";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full max-w-screen-xl mx-auto h-screen flex py-6 px-4 md:px-0 flex-col justify-between font-[family-name:var(--font-inter)] shadow-xl">
      <main>
        <div className="w-full grid justify-center">
          <div className="w-48 mx-auto">
            <Image
              width={150}
              height={150}
              src={"/tascbar.png"}
              alt="tascbar logo"
              className="mx-auto [@media(prefers-color-scheme:dark)]:invert"
            />
          </div>

          <h1 className="mx-auto py-6 mt-12 text-4xl text-center">
            We&apos;re building our website and we <br /> can build yours too!
          </h1>

          <div className="relative w-full h-96 my-8 flex justify-center items-center border border-border border-dashed rounded-xl">
            <Particles
              className="absolute inset-0 [@media(prefers-color-scheme:dark)]:invert"
              quantity={200}
              ease={20}
              color={"#000000"}
              refresh
            />
            <h3 className="text-xs font-light tracking-[1rem] animate-pulse">
              GOOD STUFF BEING BUILT
            </h3>
          </div>
        </div>
      </main>

      <footer className="w-full max-w-2xl mx-auto flex justify-between items-end">
        <a
          href="https://cal.com/tascbar"
          className="w-36 py-2 px-3 items-center text-xs rounded-xl flex justify-between bg-primary text-background"
        >
          <span className="font-semibold">BOOK A CALL</span>
          <ArrowRightIcon className="size-4" />
        </a>
        <div className="grid grid-cols-3 gap-2">
          <a href="https://www.instagram.com/tasc.bar/">
            <IconBrandInstagramFilled className="size-8" />
          </a>
          <a href="https://wa.me/918089780714?text=Hey!%20I%20want%20to%20enquire%20about%20a%20website.">
            <IconBrandWhatsappFilled className="size-8" />
          </a>
          <a href="https://www.linkedin.com/company/tascbar/">
            <IconBrandLinkedinFilled className="size-8" />
          </a>
        </div>
      </footer>
    </div>
  );
}

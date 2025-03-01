import Image from "next/image";
import { jobs } from "@/lib/constants";

export default function page() {
    return (
        <div className="w-full max-w-screen-xl mx-auto md:h-screen flex py-6 px-4 md:px-0 flex-col justify-between font-[family-name:var(--font-inter)] shadow-xl">
            <main className="grid justify-center">
                <div className="w-48 mx-auto">
                    <Image
                        width={150}
                        height={150}
                        src={"/tascbar.png"}
                        alt="tascbar logo"
                        className="mx-auto [@media(prefers-color-scheme:dark)]:invert"
                    />
                </div>
                <h1 className="mx-auto text-7xl tracking-widest font-semibold p-12">
                    CAREERS
                </h1>

                <div className="grid gap-2">
                    {jobs.map((job, i) => (
                        <div key={i} className="flex justify-between border border-border hover:border-white hover:scale-[1.025] transition-all duration-500 p-3 rounded-lg">
                            <div className="w-fit flex justify-between gap-2 items-center">
                                <div className="w-14">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={job.logo}
                                        alt={job.alt}
                                        className="px-2"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-xl text-primary font-semibold">{job.title}</h2>
                                    <p className="text-sm text-neutral-600">{job.category}</p>
                                </div>
                            </div>
                            <a href={"https://forms.gle/P7xsRXox4dyTLnn28"} className="w-32 flex justify-center text-xs tracking-wider items-center bg-white font-bold text-black border border-border rounded-md hover:bg-neutral-300 transition-all">APPLY NOW</a>
                        </div>
                    ))}
                </div>
            </main >
        </div >
    );
}
import type {Metadata} from "next";
import { HeroSection } from "@/components";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Timofei Korsakov developer portfolio"
}


export default function Home() {
  return (
    <main className="h-full w-full bg-[url('/LooperGroup2.png')] bg-no-repeat">
      <HeroSection />
    </main>
  );
}

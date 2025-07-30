import { Spotlight } from "@/components/ui/Spotlight";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { FloatingNav } from "@/components/ui/FLoatingNav";
import { FaHome } from "react-icons/fa";
export default function Home() {
  return (
    <main className="relative flex justify-center bg-black-100 items-center flex-col overflow-hidden mx-auto sm:px-10 px-5" >
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={[
            {name:'Home', link:'/',icon:<FaHome />}
          ]} />
          <Hero/>
          <Grid/>
        </div>
    </main>
  );
}


// comment section:
// [80vh] - 80% of vertical height
// [50vw] - 50% of vertical width
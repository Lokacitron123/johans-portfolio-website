import Pageheader from "@/app/components/pageHeader/Pageheader";
import { Divider } from "@/app/components/ui/Divider";
import About from "@/app/sections/About";
import { Skills } from "@/app/sections/Skills";
import { Experience } from "./sections/Experience";

export default function Home() {
  return (
    <>
      <Pageheader />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
    </>
  );
}

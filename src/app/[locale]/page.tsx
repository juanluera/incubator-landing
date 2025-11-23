import Image from "next/image";
import Hero from "@/components/Hero";
import TensorProgram from "@/components/TensorProgram";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <TensorProgram />
    </div>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="font-semibold text-green-900">
      <h1>Home Page</h1>
      <Button>CLick Me</Button>
    </div>
  );
}

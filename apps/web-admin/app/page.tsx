import { Button } from "@workspace/ui/components/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold bg-test2">Hello! I AM ADMIN</h1>
        <Button>TEST</Button>
        <Image
          src="/uhm.JPG"
          alt="test"
          width={100}
          height={100}
          className="rounded-md"
        />
      </div>
    </div>
  );
}

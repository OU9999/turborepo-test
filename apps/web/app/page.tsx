import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold bg-test">Hello World zz</h1>
        <Button size="sm">Button</Button>
        <Input />
        <Image
          src="/test.png"
          alt="test"
          width={100}
          height={100}
          className="rounded-md"
        />
      </div>
    </div>
  );
}

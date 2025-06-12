import { Button } from '@workspace/ui/components/base/button';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="bg-test2 text-2xl font-bold">Hello! I AM ADMIN</h1>
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

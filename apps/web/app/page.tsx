import { TestFooter } from '@/components/test-footer';
import { Button } from '@workspace/ui/components/base/button';
import { Input } from '@workspace/ui/components/base/input';
import { CustomButton } from '@workspace/ui/components/button/custom-button';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-test bg-test2 text-4xl font-bold">123</h1>
        <Button size="sm">Button</Button>
        <CustomButton>HELLO!!</CustomButton>
        <Input />
        <Image
          src="/test.png"
          alt="test"
          width={100}
          height={100}
          className="rounded-md"
        />
        <TestFooter />
      </div>
    </div>
  );
}

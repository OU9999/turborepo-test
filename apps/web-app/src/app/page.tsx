import { Button } from '@workspace/ui/components/base/button';
import { CustomButton } from '@workspace/ui/components/button/custom-button';
import { Footer } from '../components/footer';
import Image from 'next/image';

export default async function Home() {
  return (
    <section className="flex h-full w-full flex-col items-center justify-center">
      <Button className="text-test">Button</Button>
      <CustomButton>HELLO!~~~!</CustomButton>
      <Image
        src="/uhm.JPG"
        alt="logo"
        width={100}
        height={100}
        className="rounded-full"
      />
      <Footer />
    </section>
  );
}

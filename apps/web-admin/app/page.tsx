import { Button } from "@workspace/ui/components/button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold bg-blue-500">Hello! I AM ADMIN</h1>
        <Button>TEST</Button>
      </div>
    </div>
  );
}

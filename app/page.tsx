import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-2 flex flex-col gap-y-5">
      <h2 className="text-6xl">Reuseable components</h2>

      <div>
        <h2 className="mb-1">Button components</h2>
        <div className="flex items-center gap-x-2">
        <Button>Primary Button</Button>
        <Button variant={'secondary'}>Primary Button</Button>
        <Button variant={'destructive'}>Primary Button</Button>
        </div>
      </div>

      <div>
        <h2 className="mb-1">Input component</h2>
        <div className="flex items-center gap-x-2">
         <Input />
        </div>
      </div>
    </div>
  );
}

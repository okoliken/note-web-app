import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import NoteLogo from "@/public/logo-light.svg";
const SignIn = () => {
  return (
    <Card className="w-[33.75rem]">
      <CardHeader className="flex flex-col items-center gap-4">
        <Image src={NoteLogo} alt="NoteLogo" />
        <div className="text-center">
          <CardTitle className="text-2xl font-bold mb-[0.5rem]">
            Welcome to Note
          </CardTitle>
          <p className="text-neutral-600 text-sm">Please log in to continue</p>
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default SignIn;

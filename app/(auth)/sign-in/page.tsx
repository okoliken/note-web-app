"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {AuthCardHeader} from "@/components/auth/AuthCardHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeSlash } from "phosphor-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import
import Image from "next/image";
import NoteLogo from "@/public/logo-light.svg";
import { useState } from "react";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number.",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutral-600 text-sm">
                  Email Address
                </FormLabel>
                <FormControl>
                  <Input
                    hasError={!!form.formState.errors.email}
                    type="email"
                    placeholder="email@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="text-neutral-600 text-sm">
                    Password
                  </FormLabel>
                  <span className="text-xs text-neutral-600 cursor-pointer underline">
                    Forgot
                  </span>
                </div>

                <FormControl>
                  <Input
                    hasError={!!form.formState.errors.password}
                    type={showPassword ? "text" : "password"}
                    {...field}
                    icon={
                      <>
                        {showPassword ? (
                          <EyeSlash
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-neutral-500"
                          />
                        ) : (
                          <Eye
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-neutral-500"
                          />
                        )}
                      </>
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" variant="default" type="submit">
            Login
          </Button>
        </form>
        <div className="mt-4">
          <hr className="border-neutral-200" />

          <div className="mt-6 flex flex-col items-center gap-4">
            <p className="text-neutral-600 text-sm">Or log in with:</p>

            <Button
              className="w-full h-12 flex items-center justify-center gap-x-[1.188rem]"
              variant="border"
            >
              <GoogleIcon />
              Google
            </Button>
          </div>
          <hr className="border-neutral-200 mt-4" />

          <div className="mt-4 flex flex-col items-center">
            <p className="text-neutral-600 text-sm">
              No account yet?{" "}
              <span className="text-neutral-950 tracking-tighter cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </Form>
    </>
  );
};

const GoogleIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8379 10.7181C17.9459 10.1681 17.9999 9.5881 17.9999 9.0081C17.9999 8.6161 17.9739 8.2341 17.9239 7.8611C17.8869 7.5871 17.6429 7.3881 17.3669 7.3881H9.5619C9.2519 7.3881 8.9999 7.6401 8.9999 7.9501V10.1561C8.9999 10.4661 9.2519 10.7181 9.5619 10.7181H13.8369C14.0129 10.7181 14.1419 10.8981 14.0759 11.0611C13.1409 13.3711 10.6859 14.8871 7.9439 14.3801C5.83793 13.9911 4.11193 12.3211 3.65993 10.2281C2.89293 6.6761 5.57693 3.53814 8.9999 3.53814C10.1219 3.53814 11.1619 3.87514 12.0289 4.45214C12.2609 4.60614 12.5639 4.59114 12.7599 4.39214L14.4619 2.65914C14.6939 2.42214 14.6799 2.02814 14.4159 1.82714C12.9749 0.731143 11.1929 0.065143 9.2549 0.012143C4.38293 -0.122857 0.16393 3.83514 0.00493009 8.7061C-0.16207 13.8141 3.93193 18.0081 8.9999 18.0081C13.3829 18.0081 17.0369 14.8681 17.8379 10.7181Z"
        fill="#0E121B"
      />
    </svg>
  );
};

const SignInPage = () => {
  return (
    <Card className="w-full max-w-[623px]">
      <AuthCardHeader />
      <CardContent className="mt-10">
        <SignInForm />
      </CardContent>
    </Card>
  );
};

export default SignInPage;

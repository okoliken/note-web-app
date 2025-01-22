"use client";
import { Card, CardContent } from "@/components/ui/card";
import { AuthCardHeader } from "@/components/auth/AuthCardHeader";
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
import { useState } from "react";
import { GoogleIcon } from "@/components/auth/icons/GoogleIcon";
import { TransitionLink } from "@/components/TransitionLink";

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
                  <TransitionLink
                    href="/forgot-password"
                    className="text-xs text-neutral-600 cursor-pointer underline"
                  >
                    Forgot
                  </TransitionLink>
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
              <TransitionLink
                href="/sign-up"
                className="text-neutral-950 tracking-tighter cursor-pointer hover:underline"
              >
                Sign Up
              </TransitionLink>
            </p>
          </div>
        </div>
      </Form>
    </>
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

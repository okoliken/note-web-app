"use client";
import { Card, CardContent } from "@/components/ui/card";
import { AuthCardHeader } from "@/components/auth/AuthCardHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeSlash, Info } from "phosphor-react";
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
import Link from "next/link";

const SignUpPage = () => {
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
    <Card className="w-full max-w-[623px]">
      <AuthCardHeader
        title="Create an account"
        subtitle="Sign up to start organizing your notes and boost your productivity."
      />
      <CardContent className="mt-10">
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base-600 dark:text-white text-sm">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      hasError={!!form.formState.errors.email}
                      placeholder="Enter your email"
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
                  <FormLabel className="text-base-600 dark:text-white text-sm">
                    Password
                  </FormLabel>

                  <FormControl>
                    <div>
                      <Input
                        hasError={!!form.formState.errors.password}
                        type={showPassword ? "text" : "password"}
                        {...field}
                        icon={
                          <>
                            {showPassword ? (
                              <EyeSlash
                                size={20}
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-base-500"
                              />
                            ) : (
                              <Eye
                                size={20}
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-base-500"
                              />
                            )}
                          </>
                        }
                      />

                      <FormLabel>
                        <p className="flex items-center gap-x-2 mt-[6px]">
                          <Info size={16} />
                          <span className="text-base-600 dark:text-base-400 text-xs">
                            At least 8 characters
                          </span>
                        </p>
                      </FormLabel>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" variant="default" type="submit">
              Sign up
            </Button>
          </form>
          <div className="mt-4">
            <hr className="border-base-200 dark:border-base-800" />

            <div className="mt-6 flex flex-col items-center gap-4">
              <p className="text-base-600 dark:text-base-300 text-sm">Or continue with:</p>

              <Button
                className="w-full h-12 flex items-center justify-center gap-x-[1.188rem]"
                variant="border"
              >
                <GoogleIcon />
                Google
              </Button>
            </div>
            <hr className="border-base-200 dark:border-base-800 mt-4" />

            <div className="mt-4 flex flex-col items-center">
              <p className="text-base-600 dark:text-base-300 text-sm">
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="text-base-950 dark:text-white tracking-tighter cursor-pointer hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};
export default SignUpPage;

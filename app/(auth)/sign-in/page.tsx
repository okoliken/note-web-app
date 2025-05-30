"use client";
import { Card, CardContent } from "@/components/ui/card";
import { AuthCardHeader } from "@/components/auth/AuthCardHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeSlash } from "phosphor-react";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
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
import useAuth from "@/services/auth/use-auth";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";


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

  const { signIn } = useAuth();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = signIn;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await mutateAsync({
      email: values.email,
      password: values.password,
    })
      .then((data) => {
        queryClient.setQueryData(['user'], data);
        router.push('/');  
      })
      .catch((error) => {
        form.setError("email", {
          type: "manual",
          message: error.message,
        });
      });
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
                <FormLabel className="text-base-600 dark:text-white text-sm">
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
                  <FormLabel className="text-base-600 dark:text-white text-sm">
                    Password
                  </FormLabel>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-base-600 dark:text-base-400 cursor-pointer underline"
                  >
                    Forgot Password
                  </Link>
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
                            className="text-base-500"
                          />
                        ) : (
                          <Eye
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-base-500"
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
          <Button
            className="w-full"
            disabled={isPending}
            isLoading={isPending}
            variant="default"
            type="submit"
          >
            Login
          </Button>
        </form>
        <div className="mt-4">
          <hr className="border-base-200 dark:border-base-800" />

          <div className="mt-6 flex flex-col items-center gap-4">
            <p className="text-base-600 dark:text-base-300 text-sm">
              Or log in with:
            </p>

            <Button
              className="w-full h-12 flex items-center justify-center gap-x-[1.188rem]"
              variant="border"
            >
              <GoogleIcon className="text-base-950 dark:text-white" />
              Google
            </Button>
          </div>
          <hr className="border-base-200 dark:border-base-800 mt-4" />

          <div className="mt-4 flex flex-col items-center">
            <p className="text-base-600 dark:text-base-300 text-sm">
              No account yet?{" "}
              <Link
                href="/sign-up"
                className="text-base-950 dark:text-white tracking-tighter cursor-pointer hover:underline"
              >
                Sign Up
              </Link>
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

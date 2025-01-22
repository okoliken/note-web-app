"use client";
import { Card, CardContent } from "@/components/ui/card";
import { AuthCardHeader } from "@/components/auth/AuthCardHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Info } from "phosphor-react";

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
import { cn } from "@/lib/utils";
import Link from "next/link";

const ResetPasswordPage = () => {
  const formSchema = z.object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number.",
      }),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // TODO: Implement password reset logic
  }

  return (
    <Card className="w-full max-w-[623px]">
      <AuthCardHeader
        title="Reset Your Password"
        subtitle="Choose a new password to secure your account."
      />
      <CardContent className="mt-10">
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-neutral-600 text-sm">
                      New Password
                    </FormLabel>
                  </div>

                  <FormControl>
                    <>
                      <Input
                        hasError={!!form.formState.errors.password}
                        type={showPassword.password ? "text" : "password"}
                        {...field}
                        icon={
                          showPassword.password ? (
                            <Info
                              size={20}
                              onClick={() => setShowPassword(prev => ({...prev, password: false}))}
                              className="text-neutral-500 cursor-pointer"
                            />
                          ) : (
                            <Info
                              size={20}
                              onClick={() => setShowPassword(prev => ({...prev, password: true}))}
                              className="text-neutral-500 cursor-pointer"
                            />
                          )
                        }
                      />

                      <FormLabel>
                        <p className="flex items-center gap-x-2 mt-[6px]">
                          <Info size={16} />
                          <span className={cn(
                            !!form.formState.errors.password && "!text-red-600",
                            "text-neutral-600 text-xs",
                          )}>
                            At least 8 characters, 1 uppercase, 1 number
                          </span>
                        </p>
                      </FormLabel>
                    </>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-neutral-600 text-sm">
                    Confirm New Password
                    </FormLabel>
                  </div>

                  <FormControl>
                    <Input
                      hasError={!!form.formState.errors.confirmPassword}
                      type={showPassword.confirmPassword ? "text" : "password"}
                      {...field}
                      icon={
                        showPassword.confirmPassword ? (
                          <Info
                            size={20}
                            onClick={() => setShowPassword(prev => ({...prev, confirmPassword: false}))}
                            className="text-neutral-500 cursor-pointer"
                          />
                        ) : (
                          <Info
                            size={20}
                            onClick={() => setShowPassword(prev => ({...prev, confirmPassword: true}))}
                            className="text-neutral-500 cursor-pointer"
                          />
                        )
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full mt-2" variant="default" type="submit">
              Reset Password
            </Button>
          </form>

          <div className="mt-4 flex flex-col items-center">
            <p className="text-neutral-600 text-sm">
              Remember your password?{" "}
              <Link
                href="/sign-in"
                className="text-neutral-950 tracking-tighter cursor-pointer hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ResetPasswordPage;
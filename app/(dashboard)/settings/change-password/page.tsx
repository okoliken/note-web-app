"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Eye, EyeSlash } from "phosphor-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";


const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: "Current password is required" }),
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof changePasswordSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="text-base-950 dark:text-white p-8 w-full">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold">Change Password</h3>
          <Form {...form}>
            <form
              className="flex flex-col gap-6 w-full max-w-[528px] mt-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between mb-1.5">
                      <FormLabel className="text-base-950 dark:text-white text-sm">
                        Old Password
                      </FormLabel>
                    </div>

                    <FormControl>
                      <Input
                        hasError={!!form.formState.errors.currentPassword}
                        type={showPassword.oldPassword ? "text" : "password"}
                        {...field}
                        icon={
                          <>
                            {showPassword.oldPassword ? (
                              <EyeSlash
                                onClick={() =>
                                  setShowPassword((prev) => ({
                                    ...prev,
                                    oldPassword: !showPassword.oldPassword,
                                  }))
                                }
                                className="text-base-500"
                              />
                            ) : (
                              <Eye
                                onClick={() =>
                                  setShowPassword((prev) => ({
                                    ...prev,
                                    oldPassword: !showPassword.oldPassword,
                                  }))
                                }
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
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between mb-1.5">
                      <FormLabel className="text-base-950 dark:text-white text-sm">
                        New Password
                      </FormLabel>
                    </div>

                    <FormControl>
                      <Input
                        hasError={!!form.formState.errors.newPassword}
                        type={showPassword.newPassword ? "text" : "password"}
                        {...field}
                        icon={
                          <>
                            {showPassword.newPassword ? (
                              <EyeSlash
                                onClick={() =>
                                  setShowPassword((prev) => ({
                                    ...prev,
                                    newPassword: !showPassword.newPassword,
                                  }))
                                }
                                className="text-base-500"
                              />
                            ) : (
                              <Eye
                                onClick={() =>
                                  setShowPassword((prev) => ({
                                    ...prev,
                                    newPassword: !showPassword.newPassword,
                                  }))
                                }
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between mb-1.5">
                      <FormLabel className="text-base-950 dark:text-white text-sm">
                        Confirm New Password
                      </FormLabel>
                    </div>

                    <FormControl>
                      <Input
                        hasError={!!form.formState.errors.confirmPassword}
                        type={
                          showPassword.confirmPassword ? "text" : "password"
                        }
                        {...field}
                        icon={
                          <>
                            {showPassword.confirmPassword ? (
                              <EyeSlash
                                onClick={() =>
                                  setShowPassword((prev) => ({
                                    ...prev,
                                    confirmPassword:
                                      !showPassword.confirmPassword,
                                  }))
                                }
                                className="text-base-500"
                              />
                            ) : (
                              <Eye
                                onClick={() =>
                                  setShowPassword((prev) => ({
                                    ...prev,
                                    confirmPassword:
                                      !showPassword.confirmPassword,
                                  }))
                                }
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
            </form>
          </Form>
        </div>
        <div className="flex items-end justify-end w-full max-w-[528px]">
          <Button className="mt-6">Apply Changes</Button>
        </div>
      </div>
    </>
  );
}

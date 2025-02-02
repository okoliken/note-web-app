"use client";
import { Card, CardContent } from "@/components/ui/card";
import { AuthCardHeader } from "@/components/auth/AuthCardHeader";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const ForgotPasswordPage = () => {
  const formSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email." }),
  });
  return (
    <Card className="w-full max-w-[540px]">
      <AuthCardHeader
        title="Forgotten your password?"
        subtitle="Enter your email below, and we’ll send you a link to reset it."
      />
      <CardContent className="mt-10">
        <ForgotPasswordForm schema={formSchema} />
      </CardContent>
    </Card>
  );
};

const ForgotPasswordForm = ({
  schema,
}: {
  schema: z.ZodObject<{ email: z.ZodString }>;
}) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base-600 text-sm">
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

        <Button type="submit" className="w-full mt-4">
          Send Reset Link
        </Button>
      </form>
    </Form>
  );
};

export default ForgotPasswordPage;

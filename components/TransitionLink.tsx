"use client";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const TransitionLink = ({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    // Wait for the fade out
    await sleep(300);
    // Navigate
    router.push(href);
    // Remove the class after navigation
    body?.classList.remove("page-transition");
  };
  
  return (
    <Link onClick={handleTransition} href={href} {...props}>
      <span className={className}>{children}</span>
    </Link>
  );
};
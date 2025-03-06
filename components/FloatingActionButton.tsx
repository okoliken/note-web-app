import React from "react";
import { PlusIcon } from "lucide-react";
import * as motion from "motion/react-client";

interface FloatingActionButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onClick,
  icon = <PlusIcon size={32} color="#fff" />,
  className = "",
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className={`h-[64px] w-[64px] rounded-full bg-blue-500 fixed bottom-20 right-5 flex items-center justify-center shadow-light-gray dark:shadow-dark-gray ${className}`}
      onClick={onClick}
    >
      {icon}
    </motion.button>
  );
};

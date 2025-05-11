"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { LucideIcon } from "lucide-react";

interface NoteActionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  icon: React.ReactElement;
  title: string;
  description: string;
  primaryAction: {
    label: string;
    onClick: () => void;
    variant?: "default" | "destructive";
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
    variant?: "default" | "destructive";
  };
}

export const NoteActionDialog = ({
  isOpen,
  onClose,
  icon,
  title,
  description,
  primaryAction,
  secondaryAction,
}: NoteActionDialogProps) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <div className="flex items-center gap-2">
            {icon}
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </div>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <AlertDialogCancel className="mt-2 sm:mt-0">
            Cancel
          </AlertDialogCancel>
          {secondaryAction && (
            <AlertDialogAction
              onClick={secondaryAction.onClick}
              className={secondaryAction.variant === "destructive" ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""}
            >
              {secondaryAction.label}
            </AlertDialogAction>
          )}
          <AlertDialogAction
            onClick={primaryAction.onClick}
            className={primaryAction.variant === "destructive" ? "bg-destructive text-destructive-foreground hover:bg-destructive/90" : ""}
          >
            {primaryAction.label}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}; 
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Separator } from "@/components/ui/separator";
import { LucideIcon } from "lucide-react";

interface NoteActionsProps {
  actions: {
    icon: LucideIcon;
    label: string;
    onClick: () => void;
    description: string;
    variant?: "default" | "destructive";
  }[];
}

const NoteActions = ({ actions }: NoteActionsProps) => {
  return (
    <>
      {actions.map((action) => (
        <AlertDialog key={action.label}>
          <AlertDialogTrigger asChild>
            <div
              className={cn(
                "py-3 px-4 border border-base-300 dark:border-base-600",
                "flex items-center gap-2 w-full rounded-lg",
                "transition-all cursor-pointer transform hover:-translate-y-0.5 ease-in duration-300",
                "hover:bg-base-100",
                "dark:text-white dark:hover:bg-base-700"
              )}
            >
              <div className="flex items-center gap-2">
                <action.icon className="w-4 h-4 text-[#0E121B] dark:text-white" />
                <h2 className="text-sm font-medium">{action.label}</h2>
              </div>
            </div>
          </AlertDialogTrigger>
          <AlertDialogContent className="sm:max-w-[425px]">
            <AlertDialogHeader>
              <div className="flex gap-4 p-5">
                <div>
                  <div className="bg-base-100 w-10 h-10 flex items-center justify-center rounded-lg">
                    <action.icon className="w-5 h-5 text-base-950 dark:text-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <AlertDialogTitle>{action.label}</AlertDialogTitle>

                  <AlertDialogDescription>
                    {action.description}
                  </AlertDialogDescription>
                </div>
              </div>
            </AlertDialogHeader>
            <Separator />
            <AlertDialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-4 py-4 px-5">
              <AlertDialogCancel className="mt-2 sm:mt-0">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={action.onClick}
                variant={action.variant}
              >
                {action.label}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      ))}
    </>
  );
};

export default NoteActions;

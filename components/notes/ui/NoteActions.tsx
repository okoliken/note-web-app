import { cn } from "@/lib/utils";

interface NoteActionsProps {
  actions: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
  }[];
}

const NoteActions = ({ actions }: NoteActionsProps) => {
  return (
    <>
      {actions.map((action) => (
        <div
          key={action.label}
          onClick={action.onClick}
          className={cn(
            "py-3 px-4 border border-base-300 dark:border-base-600",
            "flex items-center gap-2 w-full rounded-lg",
            "transition-all cursor-pointer transform hover:-translate-y-0.5 ease-in duration-300",
            "hover:bg-base-100",
            "dark:text-white dark:hover:bg-base-700"
          )}
        >
          <div key={action.label} className="flex items-center gap-2">
            {action.icon}
            <h2 className="text-sm font-medium">{action.label}</h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default NoteActions;

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
        <div className="py-3 px-4 border border-base-300 flex items-center gap-2 w-full rounded-lg hover:bg-base-100 transition-colors cursor-pointer">
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

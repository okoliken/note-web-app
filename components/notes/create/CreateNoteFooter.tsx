import { Button } from "@/components/ui/button";
import useNoteStore from "@/store/useNoteStore";

export const CreateNoteFooter = () => {
  const toggleSidePanel = useNoteStore((state) => state.toggleSidePanel);
  return (
    <div className="flex items-center gap-4 mt-4 border-t border-gray-200 pt-4">
      <Button>Save Note</Button>
      <Button onClick={toggleSidePanel} variant="secondary">
        Cancel
      </Button>
    </div>
  );
};

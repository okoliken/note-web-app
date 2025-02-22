import { Button } from "@/components/ui/button";

export const CreateNoteFooter = () => {
  return (
    <div className="flex items-center gap-4 mt-4 border-t border-gray-200 pt-4 absolute bottom-0 left-0 right-0">
      <Button>Save Note</Button>
      <Button variant="secondary">Cancel</Button>
    </div>
  );
};

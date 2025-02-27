"use client";
import { CreateNote } from "./CreateNote";
import { CreateNoteHeader } from "./CreateNoteHeader";
import { CreateNoteFooter } from "./CreateNoteFooter";
import useNoteStore from "@/store/useNoteStore";
import NoteActions from "../NoteActions";
import { ArchiveIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import SidePanel from "@/components/shared/SidePanel";

export const CreateNoteContainer = () => {
  const isSidePanelOpen = useNoteStore((state) => state.isSidePanelOpen);
  const selectedNote = useNoteStore((state) => state.selectedNote);
  return (
    <div className="flex w-full">
      {(isSidePanelOpen || selectedNote )&& (
        <div className="py-4  xl:p-4 relative flex-1">
          <CreateNoteHeader />
          <CreateNote />
          <CreateNoteFooter />
        </div>
      )}
      {selectedNote && (
        <SidePanel className="border-l border-gray-200 flex-1 xl:block hidden max-w-[18.125rem]">
          <div className="pl-8 pt-8 flex flex-col gap-4 h-full">
            <NoteActions
            actions={[
              {
                icon: <ArchiveIcon className="w-4 h-4" />,
                label: "Archive Note",
                onClick: () => {},
              },
              {
                icon: <TrashIcon className="w-4 h-4" />,
                label: "Delete Note",
                onClick: () => {},
              },
            ]}
          />
          </div>
        </SidePanel>
      )}
    </div>
  );
};

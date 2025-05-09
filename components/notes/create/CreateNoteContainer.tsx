"use client";
import NoteEditor from "./NoteEditor";
import { CreateNoteHeader } from "./CreateNoteHeader";
import { CreateNoteFooter } from "./CreateNoteFooter";
// import useNoteStore from "@/store/useNoteStore";
import NoteActions from "../ui/NoteActions";
import { ArchiveIcon } from "lucide-react";
import { TrashIcon } from "lucide-react";
import SidePanel from "@/components/shared/SidePanel";

export const CreateNoteContainer = () => {
  // const selectedNote = useNoteStore((state) => state.selectedNote);
  return (
    <div className="flex h-full min-h-[588px]">
      <div className="relative max-w-[588px] lg:px-6 lg:py-5 w-full flex-grow border-r border-gray-200 dark:border-base-800 bg-white dark:bg-[#0E121B]">
        <CreateNoteHeader />
        <NoteEditor />
        <CreateNoteFooter />
      </div>

        <SidePanel className="w-72 shrink-0 hidden xl:block">
          <div className="pl-8 pt-8 flex flex-col gap-4 h-full">
            <NoteActions
              actions={[
                {
                  icon: <ArchiveIcon className="w-4 h-4 text-[#0E121B] dark:text-white" />,
                  label: "Archive Note",
                  onClick: () => {
                    console.log("Archive Note");
                  },
                },
                {
                  icon: <TrashIcon className="w-4 h-4 text-[#0E121B] dark:text-white" />,
                  label: "Delete Note",
                  onClick: () => {},
                },
              ]}
            />
          </div>
        </SidePanel>
      {/* {selectedNote && (
      )} */}
    </div>
  );
};

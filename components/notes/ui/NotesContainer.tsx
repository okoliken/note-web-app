"use client"
import SidePanel from "@/components/shared/SidePanel";
import NoteList from "./NoteList";
import { CreateNoteContainer } from "@/components/notes/create/CreateNoteContainer";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import {useIsMobile} from "@/hooks/use-mobile"
import { useState } from "react";
import { NotesProvider } from "@/contexts/NotesContext";

const NotesContainer = () => {
  const [isNoteEditorOpen, setIsNoteEditorOpen] = useState(false);
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <NotesProvider>
        <div className="relative bg-white dark:bg-[#0E121B]">
          {!isNoteEditorOpen && (
            <>
              <div className="pt-5 pb-4 px-4">
                <h3 className="text-2xl font-bold leading-[28.8px] tracking-[-0.5px] dark:text-white">
                  All Notes
                </h3>
              </div>
              <NoteList />

              <FloatingActionButton onClick={() => setIsNoteEditorOpen(true)} />
            </>
          )}

          {isNoteEditorOpen && (
            <div className="absolute inset-0 bg-base-100 z-50">
              <CreateNoteContainer />
            </div>
          )}
        </div>
      </NotesProvider>
    );
  }

  return (
    <NotesProvider>
      <div className="flex gap-y-5 bg-white dark:bg-[#0E121B]">
        <SidePanel className="border-r border-gray-200 dark:border-base-800 w-full md:w-[290px] shrink-0">
          <NoteList />
        </SidePanel>

        {/* Desktop only */}
        <main
          className={
            "flex-grow pb-[20px] overflow-hidden hidden md:block"
          }
        >
          <CreateNoteContainer />
        </main>
      </div>
    </NotesProvider>
  );
}

export default NotesContainer;

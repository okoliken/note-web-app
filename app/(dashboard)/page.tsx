"use client";
import SidePanel from "@/components/shared/SidePanel";
import NoteList from "@/components/notes/NoteList";
import { CreateNoteContainer } from "@/components/notes/create/CreateNoteContainer";
import { useMediaQuery } from "@uidotdev/usehooks";

import { FloatingActionButton } from "@/components/FloatingActionButton";
import { useState } from "react";

export default function Home() {
  const [isNoteEditorOpen, setIsNoteEditorOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop) {
    return (
      <div className="relative">
        {!isNoteEditorOpen && (
          <>
            <div className="pt-5 pb-4 px-4">
              <h3 className="text-2xl font-bold leading-[28.8px] tracking-[-0.5px]">
                All Notes
              </h3>
            </div>
            <NoteList />

            <FloatingActionButton onClick={() => setIsNoteEditorOpen(true)} />
          </>
        )}

        {isNoteEditorOpen && (
          <div className="absolute inset-0 bg-base-100 z-50">
            
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex gap-y-5">
      <SidePanel className="border-r border-gray-200 w-full md:w-[290px] shrink-0">
        <NoteList />
      </SidePanel>

      {/* Desktop only */}
      <main
        className={
          "flex-grow pb-[20px] px-4 xl:px-6 overflow-hidden hidden md:block"
        }
      >
        <CreateNoteContainer />
      </main>
    </div>
  );
}

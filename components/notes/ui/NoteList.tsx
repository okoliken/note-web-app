"use client";
import { Button } from "@/components/ui/button";
import { NoteItem } from "./NoteItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import useNoteStore from "@/store/useNoteStore";
import { useNotes } from "@/contexts/NotesContext";

const NoteList = () => {
  const { isArchived } = useNotes();
  const notes = useNoteStore((state) => state.notes);
  const toggleSidePanel = useNoteStore((state) => state.toggleSidePanel);  

  return (
    <>
      <div className="flex flex-col gap-4 py-5 px-4 xl:pl-[35px] xl:pr-4 bg-white dark:bg-[#0E121B]">
        <Button onClick={toggleSidePanel} className={"hidden md:block w-full"}>
          + Create New Note
        </Button>

        {isArchived && <ArichivedBanner />}

        <ScrollArea className="h-[calc(100vh-100px)]">
          {notes.length > 0 ? (
            notes.map((note) => <NoteItem key={note.id} note={note} />)
          ) : (
            <div className="flex items-center justify-center h-full bg-base-100 dark:bg-base-800 text-base-950 p-2 border border-base-200 dark:border-base-700 rounded-lg dark:text-white">
              {!isArchived ? (
                 <p className="text-base-950 dark:text-white text-sm tracking-[-0.2px]">
                 You don't have any notes yet. Start a new note to capture your
                 thoughts and ideas.
               </p>
              ) : (
                <p className="text-base-950 dark:text-white text-sm tracking-[-0.2px]">
              No notes have been archived yet. Move notes here for safekeeping, <span className="underline">or create a new note</span>.
              </p>
              )}
             
            </div>
          )}
        </ScrollArea>
      </div>
    </>
  );
};

const ArichivedBanner = () => {
  return (
    <p className="text-sm tracking-tight dark:text-base-200">
      All your archived notes are stored here. You can restore or delete them anytime.
    </p>
  )
}

export default NoteList;

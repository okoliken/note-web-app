
"use client";

import { Button } from "@/components/ui/button";
import { NoteList } from "@/components/notes/NoteList";
import { ScrollArea } from "@/components/ui/scroll-area";
import useNoteStore from "@/store/useNoteStore";

const NoteListContainer = () => {
  const notes = useNoteStore((state) => state.notes);

  return (
    <>
      <div className="flex-1 flex flex-col gap-4 py-5 pl-[35px] pr-4 bg-white">
        <Button className={"w-full"}>+ Create New Note</Button>

        <ScrollArea className="h-[calc(100vh-100px)]">
          {notes.map((note) => (
            <NoteList key={note.id} note={note} />
          ))}
        </ScrollArea>
      </div>
    </>
  );
};
export default NoteListContainer;

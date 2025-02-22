"use client";
import { CreateNote } from "./CreateNote";
import { CreateNoteHeader } from "./CreateNoteHeader";
import { CreateNoteFooter } from "./CreateNoteFooter";
export const CreateNoteContainer = () => {
  return (
    <div className="p-4 min-h-[819px] relative">
      <CreateNoteHeader />
      <CreateNote />
      <CreateNoteFooter />
    </div>
  );
};

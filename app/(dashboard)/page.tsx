"use client"
import NotesContainer from "@/components/notes/ui/NotesContainer";
import useNoteStore from "@/store/useNoteStore";
import { useEffect } from "react";

export default function Home() {
  const noteList = useNoteStore((store) => store.notes)
  const selectDefaultNote = useNoteStore((store) => store.selectNote)
  useEffect(() => {
    if (noteList.length > 0) {
      selectDefaultNote(noteList[0].id)
    }

  }, [noteList, selectDefaultNote])

  return (
    <>
      <NotesContainer />
    </>
  );
}

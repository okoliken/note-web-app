"use client";
import NoteEditor from "./NoteEditor";
import { CreateNoteHeader } from "./CreateNoteHeader";
import { CreateNoteFooter } from "./CreateNoteFooter";
import NoteActions from "../ui/NoteActions";
import {
  Archive as IconArchived,
  Trash as IconTrash,
  RotateCcw as IconRestore,
} from "lucide-react";
import SidePanel from "@/components/shared/SidePanel";
import { useNotes } from "@/contexts/NotesContext";
import useNoteStore from "@/store/useNoteStore";

export const CreateNoteContainer = () => {
  const { isArchived, archiveNote, restoreNote, deleteNote } = useNotes();
  const selectedNote = useNoteStore((state) => state.selectedNote);
  const isSidePanelOpen = useNoteStore((state) => state.isSidePanelOpen);

  const handleAction = (type: "archive" | "delete" | "restore") => {
    if (!selectedNote) return;
    const noteId = String(selectedNote.id);

    switch (type) {
      case "archive":
        archiveNote(noteId);
        break;
      case "delete":
        deleteNote(noteId);
        break;
      case "restore":
        restoreNote(noteId);
        break;
    }
  };

  const getActions = () => {
    if (!selectedNote) return [];

    return isArchived
      ? [
          {
            icon: IconRestore,
            label: "Restore Note",
            description:
              "Are you sure you want to restore this note? It will be moved back to your main notes.",
            onClick: () => handleAction("restore"),
            variant: "default" as const,
          },
          {
            icon: IconTrash,
            label: "Delete Note",
            description:
              "Are you sure you want to delete this note? This action cannot be undone.",
            onClick: () => handleAction("delete"),
            variant: "destructive" as const,
          },
        ]
      : [
          {
            icon: IconArchived,
            label: "Archive Note",
            description:
              "Are you sure you want to archive this note? You can restore it later from the archived notes section.",
            onClick: () => handleAction("archive"),
            variant: "default" as const,
          },
          {
            icon: IconTrash,
            label: "Delete Note",
            description:
              "Are you sure you want to delete this note? This action cannot be undone.",
            onClick: () => handleAction("delete"),
            variant: "destructive" as const,
          },
        ];
  };

  return (
    <>
      {(selectedNote || isSidePanelOpen) && (
        <div className="flex h-full min-h-[588px]">
          <div className="relative max-w-[588px] lg:px-6 lg:py-5 w-full flex-grow border-r border-gray-200 dark:border-base-800 bg-white dark:bg-[#0E121B]">
            <CreateNoteHeader />
            <NoteEditor />
            <CreateNoteFooter />
          </div>

          <SidePanel className="w-72 shrink-0 hidden xl:block">
            <div className="pl-8 pt-8 flex flex-col gap-4 h-full">
              <NoteActions actions={getActions()} />
            </div>
          </SidePanel>
        </div>
      )}
    </>
  );
};

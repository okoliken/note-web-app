"use client";
import NoteEditor from "./NoteEditor";
import { CreateNoteHeader } from "./CreateNoteHeader";
import { CreateNoteFooter } from "./CreateNoteFooter";
import NoteActions from "../ui/NoteActions";
// import { ArchiveIcon, TrashIcon, Trash2Icon } from "lucide-react";
import { IconTrash, IconArchived, IconRestore } from "@/components/icons";
import SidePanel from "@/components/shared/SidePanel";
import { useNotes } from "@/contexts/NotesContext";
import useNoteStore from "@/store/useNoteStore";
import { NoteActionDialog } from "../ui/NoteActionDialog";
import { useState } from "react";

type ButtonVariant = "default" | "destructive";

export const CreateNoteContainer = () => {
  const { isArchived, archiveNote, restoreNote, deleteNote } = useNotes();
  const selectedNote = useNoteStore((state) => state.selectedNote);
  const [dialogState, setDialogState] = useState<{
    isOpen: boolean;
    type: "archive" | "delete" | "restore" | null;
  }>({
    isOpen: false,
    type: null,
  });

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
    setDialogState({ isOpen: false, type: null });
  };

  const getActions = () => {
    if (!selectedNote) return [];

    return isArchived
      ? [
          {
            icon: (
              <IconRestore className="w-4 h-4 text-[#0E121B] dark:text-white" />
            ),
            label: "Restore Note",
            onClick: () => setDialogState({ isOpen: true, type: "restore" }),
          },
          {
            icon: (
              <IconTrash className="w-4 h-4 text-[#0E121B] dark:text-white" />
            ),
            label: "Delete Note",
            onClick: () => setDialogState({ isOpen: true, type: "delete" }),
          },
        ]
      : [
          {
            icon: (
              <IconArchived className="w-4 h-4 text-[#0E121B] dark:text-white" />
            ),
            label: "Archive Note",
            onClick: () => setDialogState({ isOpen: true, type: "archive" }),
          },
          {
            icon: (
              <IconTrash className="w-4 h-4 text-[#0E121B] dark:text-white" />
            ),
            label: "Delete Note",
            onClick: () => setDialogState({ isOpen: true, type: "delete" }),
          },
        ];
  };

  const getDialogProps = () => {
    if (!dialogState.type) return null;

    const commonProps = {
      isOpen: dialogState.isOpen,
      onClose: () => setDialogState({ isOpen: false, type: null }),
    };

    switch (dialogState.type) {
      case "archive":
        return {
          ...commonProps,
          icon: IconArchived,
          title: "Archive Note",
          description:
            "Are you sure you want to archive this note? You can restore it later from the archived notes section.",
          primaryAction: {
            label: "Archive",
            onClick: () => handleAction("archive"),
            variant: "default" as ButtonVariant,
          },
        };
      case "delete":
        return {
          ...commonProps,
          icon: IconTrash,
          title: "Delete Note",
          description:
            "Are you sure you want to delete this note? This action cannot be undone.",
          primaryAction: {
            label: "Delete",
            onClick: () => handleAction("delete"),
            variant: "destructive" as ButtonVariant,
          },
        };
      case "restore":
        return {
          ...commonProps,
          icon: IconRestore,
          title: "Restore Note",
          description:
            "Are you sure you want to restore this note? It will be moved back to your main notes.",
          primaryAction: {
            label: "Restore",
            onClick: () => handleAction("restore"),
            variant: "default" as ButtonVariant,
          },
        };
    }
  };

  const dialogProps = getDialogProps();

  return (
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

      {dialogProps && <NoteActionDialog {...dialogProps} />}
    </div>
  );
};

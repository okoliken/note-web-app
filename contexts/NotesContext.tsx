"use client";

import { createContext, useContext, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface NotesContextType {
  isArchived: boolean;
  archiveNote: (noteId: string) => void;
  restoreNote: (noteId: string) => void;
  deleteNote: (noteId: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isArchived = pathname === "/archived";

  const archiveNote = (noteId: string) => {
    // Implement archive logic
    console.log("Archiving note:", noteId);
  };

  const restoreNote = (noteId: string) => {
    // Implement restore logic
    console.log("Restoring note:", noteId);
  };

  const deleteNote = (noteId: string) => {
    // Implement delete logic
    console.log("Deleting note:", noteId);
  };

  return (
    <NotesContext.Provider 
      value={{ 
        isArchived,
        archiveNote,
        restoreNote,
        deleteNote
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) {
    throw new Error("useNotes must be used within a NotesProvider");
  }
  return context;
} 
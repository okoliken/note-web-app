import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';

// Import the Note type from your existing type definition
import { Note } from '@/types/notes'; // Adjust the import path as needed

// Import the initial notes from your data file
import initialNotes from '@/components/notes/data';

// Define the store interface
interface NoteStore {
  isSidePanelOpen: boolean;
  notes: Note[];
  selectedNote: Note | null;
  addNote: (note: Omit<Note, 'id' | 'date'>) => void;
  selectNote: (id: string | number) => void;
  updateNote: (id: string, updatedNote: Partial<Note>) => void;
  deleteNote: (id: string) => void;
  getNoteById: (id: string) => Note | undefined;
  toggleSidePanel: () => void;
}

// Create the Zustand store without persistence
const useNoteStore = create<NoteStore>()(
  (set, get) => ({
    isSidePanelOpen: false,
    notes: initialNotes,
    selectedNote: null,
    addNote: (newNote) => {
      const note: Note = {
        id: uuidv4(),
        date: new Date(),
        ...newNote
      };
      set((state) => ({ notes: [note, ...state.notes] }));
    },
    
    selectNote: (id) => {
      set((state) => ({ selectedNote: state.notes.find((note) => note.id === id) }))
    },

    updateNote: (id, updatedNote) => {
      set((state) => ({
        notes: state.notes.map((note) => 
          note.id === id ? { ...note, ...updatedNote } : note
        )
      }));
    },
    
    deleteNote: (id) => {
      set((state) => ({
        notes: state.notes.filter((note) => note.id !== id)
      }));
    },
    
    getNoteById: (id) => {
      return get().notes.find((note) => note.id === id);
    },

    toggleSidePanel: () => {
      set((state) => {
        if (state.isSidePanelOpen) {
          return { isSidePanelOpen: false, selectedNote: null };
        }
        if (state.selectedNote) {
          return { selectedNote: null };
        }
        return { isSidePanelOpen: true };
      });
    },
  })
);

export default useNoteStore;
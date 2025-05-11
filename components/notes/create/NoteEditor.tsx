"use client";
import React, { useMemo, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import useNoteStore from "@/store/useNoteStore";

export default function NoteEditor() {
  const selectedNote = useNoteStore((state) => state.selectedNote);
  
  const extensions = useMemo(
    () => [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start typing your note here...",
      }),
    ],
    []
  );

  const editor = useEditor(
    {
      extensions,
      content: selectedNote?.description || "<p></p>",
      immediatelyRender: true,
      editorProps: {
        attributes: {
          class:
            "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none h-full min-h-[540px] relative text-base-800 dark:text-white",
        },
      },
    },
    [selectedNote?.id] // Recreate editor when selected note changes
  );

  // Update editor content when selected note changes
  useEffect(() => {
    if (editor && selectedNote) {
      editor.commands.setContent(selectedNote.description || "<p></p>");
    }
  }, [editor, selectedNote]);

  return (
    <div className="pt-4 w-full">
      <style jsx global>{`
        html.light .ProseMirror p.is-editor-empty:first-child::before,
        html:not(.dark) .ProseMirror p.is-editor-empty:first-child::before {
          color: #2b303b !important;
        }

        html.dark .ProseMirror p.is-editor-empty:first-child::before {
          color: #ffffff !important;
        }

        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          height: 0;
          font-size: 14px;
          pointer-events: none;
          line-height: 130%;
          letter-spacing: -0.2px;
        }
      `}</style>
      <EditorContent editor={editor} />
    </div>
  );
}

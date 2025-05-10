"use client";
import React, { useMemo } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

export default function NoteEditor() {
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
      content: "<p></p>",
      immediatelyRender: true,
      editorProps: {
        attributes: {
          class:
            "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none h-full min-h-[540px] relative text-base-800 dark:text-white",
        },
      },
    },
    []
  );

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
          opacity: 0.6;
        }
      `}</style>
      <EditorContent editor={editor}  className="w-full" />
    </div>
  );
}

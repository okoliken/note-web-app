"use client";
import React, { useMemo } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

export const NoteEditor = () => {

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
      immediatelyRender: false,
      editorProps: {
        attributes: {
          class:
            "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none h-full min-h-[540px] relative dark:text-white",
        },
      },
    },
    []
  ); 

  return (
    <div className="pt-4">
      <style jsx global>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          color: #2b303b;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          font-size: 14px;
          pointer-events: none;
        }
        @media (prefers-color-scheme: dark) {
          .ProseMirror p.is-editor-empty:first-child::before {
            color: #F3F5F8;
          }
        }
      `}</style>
      <EditorContent editor={editor} />
    </div>
  );
};

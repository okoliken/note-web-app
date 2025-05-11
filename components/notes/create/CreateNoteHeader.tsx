"use client";
import { TagIcon, Clock } from "lucide-react";
import useNoteStore from "@/store/useNoteStore";
import { useEffect, useRef } from "react";

export const CreateNoteHeader = () => {
  const selectedNote = useNoteStore((state) => state.selectedNote);
  const titleRef = useRef<HTMLDivElement>(null);
  const tagsInputRef = useRef<HTMLInputElement>(null);

  // Update title and tags when selected note changes
  useEffect(() => {
    if (selectedNote) {
      // Update title
      if (titleRef.current) {
        titleRef.current.textContent = selectedNote.title;
      }
      // Update tags
      if (tagsInputRef.current) {
        tagsInputRef.current.value = selectedNote.tags.join(", ");
      }
    } else {
      // Clear title and tags when no note is selected
      if (titleRef.current) {
        titleRef.current.textContent = "";
      }
      if (tagsInputRef.current) {
        tagsInputRef.current.value = "";
      }
    }
  }, [selectedNote]);

  return (
    <div className="flex flex-col gap-y-4 border-b border-gray-200 dark:border-base-800 pb-4 bg-white dark:bg-[#0E121B]">
      <div
        ref={titleRef}
        contentEditable
        role="textbox"
        aria-label="Note title"
        className="text-2xl font-bold outline-none empty:before:content-[attr(data-placeholder)] text-base-950 dark:text-white empty:before:text-base-950 empty:before:dark:text-white"
        data-placeholder="Enter a title…"
        onPaste={(e) => {
          e.preventDefault();
          const text = e.clipboardData.getData("text/plain");
          document.execCommand("insertText", false, text);
        }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 flex-1 w-full max-w-[115px]">
            <TagIcon size={15} className="text-[#2B303B] dark:text-base-300" />
            <span className="text-base-950 dark:text-base-300 letter-[-2px] text-sm">
              Tags
            </span>
          </div>
          <div className="w-full">
            <input
              ref={tagsInputRef}
              type="text"
              placeholder="Add tags separated by commas (e.g. Work, Planning)"
              className="outline-none h-[26px] w-full text-sm px-2 focus:ring-1 focus:ring-[#717784] rounded dark:bg-base-800 dark:text-base-300 dark:placeholder:text-base-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-[#2B303B] dark:text-base-300" />
            <span className="text-base-950 dark:text-base-300 letter-[-2px] text-sm">
              Last edited
            </span>
          </div>
          <span className="text-base-950 dark:text-base-300 letter-[-2px] text-sm">
            {selectedNote?.date
              ? new Date(selectedNote.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
              : "Just now"}
          </span>
        </div>
      </div>
    </div>
  );
};

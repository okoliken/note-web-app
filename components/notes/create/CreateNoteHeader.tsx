"use client";
import { TagIcon, Clock } from "lucide-react";
export const CreateNoteHeader = () => {
  return (
    <div className="flex flex-col gap-y-4 border-b border-gray-200 pb-4">
      <div
        contentEditable
        role="textbox"
        aria-label="Note title"
        className="text-2xl font-bold outline-none empty:before:content-[attr(data-placeholder)] empty:before:text-neutral-950"
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
            <TagIcon size={15} color="#2B303B" className="font-normal" />
            <span className="text-base-950 letter-[-2px] text-sm">Tags</span>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Add tags separated by commas (e.g. Work, Planning)"
              className="outline-none h-[26px] w-full text-sm px-2 focus:ring-1 focus:ring-[#717784] rounded"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Clock size={15} color="#2B303B" className="font-normal" />
            <span className="text-base-950 letter-[-2px] text-sm">
              Last edited
            </span>
          </div>
          <span className="text-base-950 letter-[-2px] text-sm">
            1 minute ago
          </span>
        </div>
      </div>
    </div>
  );
};

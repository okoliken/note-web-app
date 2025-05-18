"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Note } from "@/types/notes";
import useNoteStore from "@/store/useNoteStore";
import { cn } from "@/lib/utils";

export const NoteItem = ({ note }: { note: Note }) => {
  const selectNote = useNoteStore((state) => state.selectNote);
  const selectedNote = useNoteStore((state) => state.selectedNote);

  return (
    <Card
      onClick={() => selectNote(note.id)}
      className={cn(
        "shadow-none rounded-[6px] border-none !p-2 flex flex-col lg:hover:bg-base-100 lg:hover:dark:bg-base-800 transition-all duration-300 ease-in-out lg:cursor-pointer group relative mb-1",
        selectedNote?.id === note.id && "bg-base-100 dark:bg-base-800",
        note?.id && note.date ? "!gap-3" : ""
      )}
    >
      <CardHeader className={"p-0"}>
        <CardTitle
          className={
            "leading-[19.2px] tracking-[-0.3px] font-semibold transition-colors duration-200 "
          }
        >
          {note.title} 
        </CardTitle>
      </CardHeader>
      {note.tags.length > 0 && (
        <CardContent>
          <CardDescription>
            <div className={"flex items-center gap-1 flex-wrap"}>
              {note.tags.map((tag, index) => (
                <div key={tag}>
                  <Badge className="dark:bg-base-600" title={tag}>
                    {tag}
                  </Badge>
                  {index < note.tags.length - 1 && (
                    <span className="sr-only">, </span>
                  )}
                </div>
              ))}
            </div>
          </CardDescription>
        </CardContent>
      )}
      {note.date && (
        <CardFooter className={"p-0"}>
          <p
            className={
              "text-xs leading-[14.4px] tracking-[-0.2px] text-base-700 dark:text-base-300"
            }
          >
            {new Date(note.date as string).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </CardFooter>
      )}
      <Separator
        className={cn(
          "visible lg:group-hover:invisible",
          selectedNote?.id === note.id && "invisible"
        )}
      />
    </Card>
  );
};

import SidePanel from "@/components/shared/SidePanel";
import NoteList from "@/components/notes/NoteList";
import { CreateNoteContainer } from "@/components/notes/create/CreateNoteContainer";


export default function Home() {
  return (
    <div className="flex gap-y-5">
      <SidePanel className="border-r border-gray-200 w-[290px] shrink-0">
        <NoteList />
      </SidePanel>

      <main className={"flex-grow pb-[20px] px-4 xl:px-6 overflow-hidden"}>
        <CreateNoteContainer />
      </main>
    </div>
  );
}

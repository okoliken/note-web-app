import SidePanel from "@/components/shared/SidePanel";
import NoteListContainer from "@/components/notes/NoteListContainer";
import { CreateNoteContainer } from "@/components/notes/create/CreateNoteContainer";


export default function Home() {
  return (
    <div className="flex gap-y-5">
      <SidePanel className="border-r border-gray-200 flex-1 max-w-[18.125rem]">
        <NoteListContainer />
      </SidePanel>

      <main className={"pb-[20px] px-4 xl:px-6 w-full max-w-5xl"}>
        <CreateNoteContainer />
      </main>
    </div>
  );
}

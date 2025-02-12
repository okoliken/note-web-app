import SidePanel from "@/components/shared/SidePanel";
import NoteListContainer from "@/components/notes/NoteListContainer";
import { CreateNoteContainer } from "@/components/notes/create/CreateNoteContainer";


export default function Home() {
  return (
    <div className="flex gap-y-5">
        <SidePanel className="border-r border-gray-200">
            <NoteListContainer />
        </SidePanel>

        <main className={'py-[20px] px-6'}>
            <CreateNoteContainer />
        </main>
        <SidePanel className="border-l border-gray-200">
          <>
          
          </>
        </SidePanel>
    </div>
  );
}

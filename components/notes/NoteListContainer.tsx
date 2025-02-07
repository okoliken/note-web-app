
import { Button } from "@/components/ui/button";
import { NoteList } from "@/components/notes/NoteList";
import notes from './data'
const NoteListContainer = () => {
    return (
        <>
        <div className="flex-1 flex flex-col gap-4 py-5 pl-[35px] pr-4 bg-white border-r border-gray-200">
            <Button className={'w-full'}>+ Create New Note</Button>

            <div>
                {notes.map((note, i) => (
                  <NoteList key={i} note={note} />
                ))}
            </div>
        </div>
        </>
    )
}
export default NoteListContainer;
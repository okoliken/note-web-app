import InnerLayoutPanel from "@/components/shared/InnerLayoutPanel";
import NoteListContainer from "@/components/notes/NoteListContainer";

export default function Home() {
  return (
    <div className="flex gap-y-5">
        <InnerLayoutPanel>
            <NoteListContainer />
        </InnerLayoutPanel>

        <main className={'py-[20px] px-6'}>
            <h1 className={'text-2xl'}>Enter a title…</h1>
        </main>
    </div>
  );
}

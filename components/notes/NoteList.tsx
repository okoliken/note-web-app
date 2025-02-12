import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Note } from './data'


export const NoteList = ({ note }: {note: Note}) => {
    return (
        <Card
            className={'shadow-none rounded-[6px] border-none !p-2 flex flex-col gap-3 hover:bg-neutral-100 transition-all duration-300 ease-in-out cursor-pointer group relative'}>
            <CardHeader className={'p-0'}>
                <CardTitle
                    className={'leading-[19.2px] tracking-[-0.3px] font-semibold transition-colors duration-200 '}>
                    {note.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>
                    <div className={'flex items-center gap-1 flex-wrap'}>
                        {note.tags.map((tag, index) => (
                            <>
                                <Badge key={tag} title={tag}>{tag}</Badge>
                                {index < note.tags.length - 1 && <span className="sr-only">, </span>}
                            </>
                        ))}
                    </div>
                </CardDescription>
            </CardContent>
            <CardFooter className={'p-0'}>
                <p className={'text-xs leading-[14.4px] tracking-[-0.2px] text-base-700'}>
                    {new Date(note.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                    })}
                </p>
            </CardFooter>
            <Separator className="visible group-hover:invisible" />
        </Card>
    )
}
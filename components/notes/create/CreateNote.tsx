"use client"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

export const CreateNote = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Start typing your note here...',
            }),
        ],
        content: '<p></p>',
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none h-full min-h-[540px] relative',
            },
        },
    })

    return (
        <div className="pt-4">
            <style jsx global>{`
                .ProseMirror p.is-editor-empty:first-child::before {
                    color: #2B303B;
                    content: attr(data-placeholder);
                    float: left;
                    height: 0;
                    font-size: 14px;
                    pointer-events: none;
                }
            `}</style>
            <EditorContent editor={editor} />
        </div>
    )
} 
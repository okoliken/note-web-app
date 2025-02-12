"use client"
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
                    const text = e.clipboardData.getData('text/plain');
                    document.execCommand('insertText', false, text);
                }}
            />
            <div className="border p-1">

            </div>
        </div>
    )
}
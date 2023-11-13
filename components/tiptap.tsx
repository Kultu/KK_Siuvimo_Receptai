"use client"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from '@tiptap/starter-kit'
import { Toolbar } from "./toolbar"

export default function Tiptap({
    value,
    onValueChange,
}:  {
    value: string
    onValueChange: (richText: string) => void
})  {
    const editor = useEditor({
        extensions: [StarterKit.configure()],
        content: value,
        editorProps: {
            attributes: {
                class:
                    "rounded-md border min-h-[150px] border-input bg-transparent"
            },
        },
        onUpdate({  editor  })  {
            onValueChange(editor.getHTML())
            console.log(editor.getHTML())
        },
    })

    return (
        <div className="flex flex-col justify-stretch min-h-[250px]">
            <Toolbar editor={editor} />
            <EditorContent editor={editor} placeholder="Produkto aprašymas"/>
        </div>
    )
}
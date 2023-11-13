"use client"

import { type Editor } from "@tiptap/react"
import {
    Bold,
    Heading2,
    Italic,
    List,
    ListOrdered,
    Strikethrough,
}   from "lucide-react"
import { Toggle } from "./ui/toggle"

type Props = {
    editor: Editor | null
}

export function Toolbar({ editor }: Props) {
    if (!editor) {
        return null
    }
    return (
        <div className="border border-input bg-transparent rounded-sm">
            <Toggle
                pressed={editor.isActive("heading")}
                onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
            > 
                <Heading2 className="h-4 w-4" /> 
            </Toggle>
            <Toggle
                pressed={editor.isActive("bold")}
                onPressedChange={() => editor.chain().focus().toggleBold().run()
                }
            > 
                <Bold className="h-4 w-4" /> 
            </Toggle>
            <Toggle
                pressed={editor.isActive("italic")}
                onPressedChange={() => editor.chain().focus().toggleItalic().run()
                }
            > 
                <Italic className="h-4 w-4" /> 
            </Toggle>
            <Toggle
                pressed={editor.isActive("strike")}
                onPressedChange={() => editor.chain().focus().toggleStrike().run()
                }
            > 
                <Strikethrough className="h-4 w-4" /> 
            </Toggle>
            <Toggle
                pressed={editor.isActive("bulletList")}
                onPressedChange={() => editor.chain().focus().toggleBulletList().run()
                }
            > 
                <List className="h-4 w-4" /> 
            </Toggle>
            <Toggle
                pressed={editor.isActive("orderedList")}
                onPressedChange={() => editor.chain().focus().toggleOrderedList().run()
                }
            > 
                <ListOrdered className="h-4 w-4" /> 
            </Toggle>
        </div>
    )
}
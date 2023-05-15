'use client'
import { useState } from "react"
import { supabase } from '../../supabaseClient';

export default function CreateNote()
{
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const create = async() => {
    
        await supabase.from('notes').upsert({title:title, content:content}).select()}

    return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        Create note
      </button>
    </form>
    )
}
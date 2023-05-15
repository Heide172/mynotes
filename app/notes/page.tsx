import Link from 'next/link';
import { supabase } from '../supabaseClient';
import styles from './Notes.module.css';
import CreateNote from './[id]/CreateNote';

async function getNotes() {
    const { data, error } = await supabase.from('notes').select()
    return data}
    


export default async function NotesPage() {
    const notes = await getNotes()
    return(
      <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
    )
}

function Note({ note }: any){
    const {id, created_at, title, content} = note || {}
    
    return (
        <Link href={`/notes/${id}`}>
          <div className={styles.note}>
            <h2>{title}</h2>
            <h5>{content}</h5>
            <p>{created_at}</p>
          </div>
        </Link>
      )
}
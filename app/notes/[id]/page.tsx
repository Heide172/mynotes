import styles from '../Notes.module.css';
import { supabase } from '../../supabaseClient';

async function getNote(noteId: string) {
    const { data, error } = await supabase.from('notes').select().eq('id', noteId)
    //  {cache: "no store"} 
    // return JSON.stringify({ data }, null, 2)}
       return data}


export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  //const {id, created_at, title, content} = note || {}
  return (
    <div>
      {note?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
    </div>
  );
}

function Note({ note }: any){
    return (
        <div>
        <h1>notes/{note.id}</h1>
        <div className={styles.note}>
          <h3>{note.title}</h3>
          <h5>{note.content}</h5>
          <p>{note.created}</p>
        </div>
      </div>
       
      )}
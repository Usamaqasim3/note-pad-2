import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNote = (props) => {
  const [note, setNote] = useState({
    title:'',
    content:''
  });
    const InputEvent= (event)=>{
      // const value = event.target.value;
      // const name = event.target.name;
      const {name, value}= event.target;
        setNote((prevData)=>{
          return {

            ...prevData,
            [name]: value,
          }
        }
        ) 
    }
    const addEvent=()=>{
      if (note.title && note.content){
          props.passNote(note);
          setNote({
            title:'',
            content:''
          });
        } else{
          alert("please fill out required fields")
        }
    }
  return (
    <>
        <div className="main_note">
            <form >
                <input
                className='input-main' type="text"
                onChange={InputEvent}
                name='title'
                value={note.title}
                placeholder='Title' 
                autoComplete='off'
                />
                <textarea 
                onChange={InputEvent}
                name='content'
                value={note.content}
                placeholder='Write a note'
                 cols=""
                  rows="">

                  </textarea>
                    <Button onClick={addEvent}>
                    <AddIcon className='plus_sign'/>
                    </Button>
            </form>
        </div>
    </>
  )
}

export default CreateNote
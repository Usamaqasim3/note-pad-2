import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import StatusDropdown from './Status';


const Note = (props) => {
  const deleteNote=()=>{
    props.deleteItem(props.id);
  }
  return (
    <>
        <div className="note">
            <h1>{props.title} </h1>
            <br />
            <p>{props.content}</p>
            <StatusDropdown  status={props.status} onChange={props.onStatusChange}  />

            <button className='btn' onClick={deleteNote}>
                <DeleteIcon className='deleteIcon'/>
            </button>
        </div>
    </>
  )
}

export default Note
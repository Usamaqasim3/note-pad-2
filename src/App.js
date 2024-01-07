import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'
import StatusDropdown from './Status'
const App = () => {
  const [addItem, setAddItem]= useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState([]);


  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, { ...note, status: "pending" }];
    });
  };
  
  const filteredNotes = addItem.filter((note) => {
    return (
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()) 
       );
  });
  const onDelete = (id)=>{
    setAddItem((olddata)=>
      olddata.filter((currdata, indx)=>{
        return  indx !== id;
      })
    )
  }
  const onStatusChange = (id, selectedStatus) => {
    setAddItem((prevData) =>
      prevData.map((item, index) =>
        index === id ? { ...item, status: selectedStatus } : item
      )
    );
  };
  return (
  <>

<Header setSearchTerm={setSearchTerm} />

    <CreateNote passNote={addNote}/>
    
    {filteredNotes.map((val, index) =>{
      return <Note
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={onDelete}
        status={val.status}

        onStatusChange={(selectedStatus) => 
        onStatusChange(index, selectedStatus)}

      />
    })}
    <Footer/>
    </>
  )
}

export default App